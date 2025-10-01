import { useState, useRef } from 'react';
import { ArrowLeft, Upload, User, AtSign, Download } from 'lucide-react';
import html2canvas from 'html2canvas';

interface CardGeneratorProps {
  onNavigateToHome: () => void;
}

export default function CardGenerator({ onNavigateToHome }: CardGeneratorProps) {
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    if (!cardRef.current || !name) return;

    setIsGenerating(true);
    try {
      // Clone the card element so we don't affect the visible one
      const originalCard = cardRef.current;
      const clonedCard = originalCard.cloneNode(true) as HTMLElement;

      // Style the clone for full-res capture
      clonedCard.style.position = 'fixed';
      clonedCard.style.left = '-9999px';
      clonedCard.style.top = '-9999px';
      clonedCard.style.width = '1920px';
      clonedCard.style.maxWidth = 'none';
      clonedCard.style.transform = 'none';
      clonedCard.style.border = 'none';
      clonedCard.style.borderRadius = '0';

      // Add to DOM temporarily
      document.body.appendChild(clonedCard);

      // Scale up the content elements for high-res capture
      const contentContainer = clonedCard.querySelector('.card-content');
      const profileImages = clonedCard.querySelectorAll('.profile-image');
      const cardName = clonedCard.querySelector('.card-name');
      const cardHandle = clonedCard.querySelector('.card-handle');
      const userIcon = clonedCard.querySelector('.user-icon');
      const imageContainer = clonedCard.querySelector('.profile-image-container');

      // Adjust the content container padding for proper spacing
      if (contentContainer) {
        (contentContainer as HTMLElement).style.padding = '128px';
        (contentContainer as HTMLElement).style.gap = '0px';
      }

      profileImages.forEach((img) => {
        (img as HTMLElement).style.width = '512px';
        (img as HTMLElement).style.height = '512px';
        (img as HTMLElement).style.borderWidth = '16px';
      });

      if (imageContainer) {
        (imageContainer as HTMLElement).style.marginBottom = '80px';
      }

      if (cardName) {
        (cardName as HTMLElement).style.fontSize = '128px';
        (cardName as HTMLElement).style.marginBottom = '40px';
        (cardName as HTMLElement).style.lineHeight = '1.2';
      }

      if (cardHandle) {
        (cardHandle as HTMLElement).style.fontSize = '80px';
        (cardHandle as HTMLElement).style.lineHeight = '1.2';
      }

      if (userIcon) {
        (userIcon as SVGElement).setAttribute('width', '192');
        (userIcon as SVGElement).setAttribute('height', '192');
      }

      // Wait for styles to apply
      await new Promise(resolve => setTimeout(resolve, 150));

      const canvas = await html2canvas(clonedCard, {
        backgroundColor: null,
        scale: 1,
        logging: false,
        useCORS: true,
        allowTaint: true,
        imageTimeout: 0,
        width: 1920,
        height: 1080,
      });

      // Remove cloned element
      document.body.removeChild(clonedCard);

      const link = document.createElement('a');
      link.download = `bnb-id-${name.toLowerCase().replace(/\s+/g, '-')}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (error) {
      console.error('Error generating card:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const shareOnX = () => {
    const text = `Check out my BNB ID! 🚀 Join the BNB community and create yours! #BNBID`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <button
            onClick={onNavigateToHome}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <button
            onClick={shareOnX}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-colors"
          >
            Share on X
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Create Your BNB ID</h1>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">BNB ID Details</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-300">
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-gray-600 hover:border-yellow-400 rounded-xl p-8 cursor-pointer transition-colors text-center"
                  >
                    {profileImage ? (
                      <div className="flex flex-col items-center">
                        <img
                          src={profileImage}
                          alt="Profile"
                          className="w-24 h-24 rounded-full object-cover mb-4"
                        />
                        <p className="text-sm text-gray-400">Click to change image</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload size={40} className="text-gray-400 mb-4" />
                        <p className="text-gray-300 font-semibold">Click to upload image</p>
                        <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 10MB</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-300">
                    Your Name
                  </label>
                  <div className="relative">
                    <User size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-300">
                    X Handle
                  </label>
                  <div className="relative">
                    <AtSign size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={handle}
                      onChange={(e) => setHandle(e.target.value)}
                      placeholder="your_handle"
                      className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                    />
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  disabled={!name || isGenerating}
                  className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-bold rounded-xl transition-colors flex items-center justify-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Download size={20} />
                      <span>Download BNB ID</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div
              ref={cardRef}
              className="relative w-full max-w-md aspect-[16/9] border-4 border-yellow-400 rounded-2xl overflow-hidden transform transition-transform hover:scale-105"
              style={{
                backgroundImage: 'url(/backcard.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 card-content">
                <div className="mb-6 profile-image-container">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400 profile-image"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gray-700 border-4 border-yellow-400 flex items-center justify-center profile-image">
                      <User size={48} className="text-gray-400 user-icon" />
                    </div>
                  )}
                </div>

                <h3 className="text-3xl font-bold text-white mb-2 text-center card-name">
                  {name || 'Your Name'}
                </h3>

                <p className="text-xl text-yellow-400 font-semibold card-handle">
                  @{handle || 'your_handle'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
