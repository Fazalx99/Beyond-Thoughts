import React from 'react';
import { Users, MessageCircle, Sparkles, ArrowRight, Brain, Globe2, Leaf } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
      <div className="h-14 w-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
        <Icon className="h-7 w-7 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center relative">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">Beyond Thoughts</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
            Where Ideas <span className="text-green-600">Flourish</span> and <span className="text-green-600">Grow</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join a vibrant community where diverse minds meet to share knowledge, exchange ideas, and foster meaningful conversations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button className="bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-600/20">
              Join the Conversation <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Beyond Thoughts?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover a platform designed to nurture intellectual growth and meaningful connections.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Users}
            title="Diverse Community"
            description="Connect with people from various backgrounds, cultures, and expertise levels."
          />
          <FeatureCard
            icon={MessageCircle}
            title="Rich Discussions"
            description="Engage in thought-provoking conversations that challenge and expand your perspective."
          />
          <FeatureCard
            icon={Brain}
            title="Knowledge Exchange"
            description="Share your expertise and learn from others in a collaborative environment."
          />
          <FeatureCard
            icon={Sparkles}
            title="Creative Expression"
            description="Express your ideas freely and receive constructive feedback from the community."
          />
          <FeatureCard
            icon={Globe2}
            title="Global Perspectives"
            description="Access insights and viewpoints from around the world, broadening your horizons."
          />
          <div className="relative bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Ready to join?</h3>
            <p className="mb-8 opacity-90">Start your journey of discovery and connection today.</p>
            <button className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-white/50 backdrop-blur-sm py-24 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop')] bg-cover bg-fixed opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Join Our Growing Community</h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Beyond Thoughts is more than just a platform—it's a movement of curious minds and passionate thinkers coming together to create something extraordinary.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur-sm px-6 py-8 rounded-2xl shadow-lg border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">10k+</div>
                  <div className="text-gray-600">Active Members</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-6 py-8 rounded-2xl shadow-lg border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">5k+</div>
                  <div className="text-gray-600">Daily Discussions</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-6 py-8 rounded-2xl shadow-lg border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600">Topics</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Community collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-600/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm py-16 border-t border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-8 md:mb-0">
              <Leaf className="h-9 w-9 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Beyond Thoughts</span>
            </div>
            <div className="flex gap-8 text-gray-600">
              <a href="#" className="hover:text-green-600 transition-colors text-lg">About</a>
              <a href="#" className="hover:text-green-600 transition-colors text-lg">Features</a>
              <a href="#" className="hover:text-green-600 transition-colors text-lg">Community</a>
              <a href="#" className="hover:text-green-600 transition-colors text-lg">Contact</a>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-500">
            © 2024 Beyond Thoughts. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;