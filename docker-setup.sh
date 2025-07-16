#!/bin/bash

echo "🐳 Docker Setup for Car Rental Platform"
echo "======================================="

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "Visit: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker Compose is available
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose is not available. Please install Docker Compose."
    exit 1
fi

echo "✅ Docker is available"

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "📋 Creating .env.local from .env.example..."
    cp .env.example .env.local
    
    # Generate NextAuth secret
    echo "🔐 Generating NextAuth secret..."
    if command -v openssl &> /dev/null; then
        SECRET=$(openssl rand -base64 32)
        # Replace the placeholder secret in .env.local
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            sed -i '' "s/your-nextauth-secret-here/$SECRET/" .env.local
        else
            # Linux
            sed -i "s/your-nextauth-secret-here/$SECRET/" .env.local
        fi
        echo "✅ NextAuth secret generated and set"
    else
        echo "⚠️  OpenSSL not found. Please manually set NEXTAUTH_SECRET in .env.local"
        echo "💡 Generate one with: openssl rand -base64 32"
    fi
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "🚀 Building and starting the application with Docker..."
echo ""

# Check if port 3000 is available
if netstat -tuln 2>/dev/null | grep -q ":3000 " || ss -tuln 2>/dev/null | grep -q ":3000 "; then
    echo "⚠️  Port 3000 is already in use. Using port 3001 instead..."
    docker-compose -f docker-compose.alt.yml up --build
    PORT_MSG="📱 Your app should be running at: http://localhost:3001"
else
    # Build and start with docker-compose
    docker-compose up --build
    PORT_MSG="📱 Your app should be running at: http://localhost:3000"
fi

echo ""
echo "🎉 Setup complete!"
echo "$PORT_MSG"
echo ""
echo "📝 Useful Docker commands:"
echo "  • Stop the app: docker-compose down"
echo "  • View logs: docker-compose logs -f"
echo "  • Restart: docker-compose restart"
echo "  • Rebuild: docker-compose up --build"
