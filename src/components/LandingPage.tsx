import { Sparkles, Users, Share2 } from 'lucide-react';

interface LandingPageProps {
  onNavigateToGenerator: () => void;
}

export default function LandingPage({ onNavigateToGenerator }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/image.png" alt="BNB Logo" width="40" height="40" />
            <span className="text-2xl font-bold">BNB ID</span>
          </div>
          <a
            href="https://x.com/i/communities/1973470926164431220"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-colors"
          >
            Join X Community
          </a>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Create Your Epic <span className="text-yellow-400">BNB ID</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the BNB season and create your personalized BNB ID.
              Show off your crypto identity and connect with the community on X.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onNavigateToGenerator}
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-bold text-lg transition-colors"
              >
                Create My BNB ID
              </button>
              <a
                href="https://x.com/i/communities/1973470926164431220"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 rounded-full font-bold text-lg transition-colors text-center"
              >
                View Community
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900 rounded-2xl p-1 transform transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                <img
                  src="/backcard.png"
                  alt="Sample BNB ID"
                  className="rounded-xl w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why Create Your BNB ID?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
              <Sparkles size={32} className="text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Show Your Status</h3>
            <p className="text-gray-300 leading-relaxed">
              Display your crypto identity with a personalized BNB ID that represents your place in the BNB community.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
              <Users size={32} className="text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Join the Community</h3>
            <p className="text-gray-300 leading-relaxed">
              Connect with thousands of BNB enthusiasts on X. Share your BNB ID and be part of the movement.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
              <Share2 size={32} className="text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Easy to Share</h3>
            <p className="text-gray-300 leading-relaxed">
              Download your BNB ID with one click and share it instantly on all your social media platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-yellow-400 text-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Your BNB ID?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of BNB community members who have already created their BNB ID
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onNavigateToGenerator}
              className="px-8 py-4 bg-black hover:bg-gray-900 text-yellow-400 rounded-full font-bold text-lg transition-colors"
            >
              Create Your BNB ID Now
            </button>
            <a
              href="https://twitter.com/search?q=%23BNBCard&src=typed_query"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-black hover:bg-black hover:text-yellow-400 rounded-full font-bold text-lg transition-colors"
            >
              Browse Community IDs
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/image.png" alt="BNB Logo" width="32" height="32" />
            <span className="text-xl font-bold">BNB ID</span>
          </div>
          <p className="text-gray-400">Create, share, and celebrate your crypto identity</p>
        </div>
      </footer>
    </div>
  );
}
