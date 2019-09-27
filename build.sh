echo "Pulling client..."
git clone https://github.com/jackHedaya/saloon-client __client-codebase
echo "Pull complete"

echo "Building client..."
cd __client-codebase/
npm install --only=dev && npm install && npm run build
echo "Build complete"

echo "Moving build..."
mv build/ ../react-build
echo "Move complete"

echo "Removing client codebase..."
cd ../
rm -rf __client-codebase
echo "Removed client codebase"