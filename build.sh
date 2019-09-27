echo "Pulling client..."
git clone https://github.com/jackHedaya/saloon-client react-build
echo "Pull complete"

echo "Building Client"
cd react-build/
npm run build
echo "Build complete"