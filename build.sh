REMOTE_HASH=$(git ls-remote https://github.com/jackHedaya/saloon-client.git HEAD | awk '{ print $1}')
STORE_FILE='VERSION_HASH'


if [[ -f "react-build/$STORE_FILE" && $(< react-build/$STORE_FILE) == "$REMOTE_HASH" ]]; then
  echo "Client up to date. Exiting..."
  exit
fi

echo "Pulling client..."
git clone https://github.com/jackHedaya/saloon-client __client-codebase
echo "Pull complete"

echo "Building client..."
cd __client-codebase/
npm install --only=dev && npm install && npm run build
echo "Build complete"

echo "Moving build..."
mv build/ ../react-build
echo "$REMOTE_HASH" > "../react-build/$STORE_FILE"
echo "Move complete"

echo "Removing client codebase..."
cd ../
rm -rf __client-codebase
echo "Removed client codebase"