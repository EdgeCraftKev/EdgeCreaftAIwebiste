import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Video, 
  Camera, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Check,
  DollarSign,
  Building2,
  Linkedin
} from 'lucide-react';
import Header from './Header';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Transformational AI Applications
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We create intelligent applications that transform how people connect, collaborate, and celebrate life's most meaningful moments. Through cutting-edge AI technology, we're building tools that bring people together and preserve memories that matter.
            </p>
            
            {/* Built on Trusted Technology - EdgeCraft */}
            <div className="mb-8">
              <p className="text-base sm:text-lg text-gray-500 mb-4 font-medium">Powered by industry-leading AI and cloud technologies</p>
              <div className="flex justify-center items-center space-x-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img 
                  src="/google-cloud-logo.svg" 
                  alt="Google Cloud" 
                  className="h-5 w-auto"
                />
                <img 
                  src="/Amazon_Web_Services_Logo.svg.png" 
                  alt="AWS" 
                  className="h-5 w-auto"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" 
                  alt="Google Gemini" 
                  className="h-5 w-auto"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" 
                  alt="OpenAI" 
                  className="h-5 w-auto"
                />
                <img 
                  src="/anthropic logo.png" 
                  alt="Anthropic" 
                  className="h-5 w-auto"
                />
              </div>
            </div>
            
            <div className="flex justify-center mb-6">
              <a 
                href="https://www.linkedin.com/company/edgecraft-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors touch-manipulation"
                aria-label="Follow EdgeCraft AI on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="font-semibold">Follow us on LinkedIn</span>
              </a>
            </div>
            <div className="mt-8">
              <p className="text-lg sm:text-xl font-semibold text-gray-700">
                Drumroll Please.....Our Flagship Application:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CollabMe Introduction */}
      <section id="collabme" className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/COLLAB_ME_LOGO_FINAL-07.svg" 
                alt="CollabMe" 
                className="h-16 sm:h-20 lg:h-24 w-auto max-w-xs"
                loading="eager"
                style={{ minHeight: '64px' }}
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Secure Cloud Video Collaboration
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              The elegant solution for collecting, organizing, and sharing video content from any event. From intimate gatherings to large celebrations, CollabMe makes collaborative video creation simple and secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@edgecraftai.com?subject=CollabMe%20-%20Learn%20More%20Request&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20interested%20in%20learning%20more%20about%20CollabMe%20for%20my%20upcoming%20event.%20Please%20send%20me%20more%20information%20about:%0A%0A-%20How%20CollabMe%20works%0A-%20Pricing%20and%20plans%0A-%20Setup%20process%0A-%20Demo%20or%20trial%20options%0A%0AThank%20you!"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 active:scale-95 mx-4 sm:mx-0 inline-block text-center touch-manipulation"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                See CollabMe in Action
              </span>
            </h2>
          </div>
          
          {/* Video Container */}
          <div className="relative w-full max-w-3xl mx-auto mb-8">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-2xl">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/1nOQYBmJ3RQ?si=T4POq2ow9cjvBWKn" 
                title="CollabMe Demo - Wedding Video Collaboration" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Marketing Content */}
          <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 rounded-3xl p-8">
            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed text-center max-w-3xl mx-auto">
              Your wedding day is full of magical moments — but most of them stay scattered in your guests' camera rolls. CollabMe changes that.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
                <p className="text-gray-700">Guests scan a QR code and upload their clips.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
                <p className="text-gray-700">AI organizes, tags, and syncs every perspective.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
                <p className="text-gray-700">In seconds, create cinematic highlight reels — 10s, 1m, or 5m cuts.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
                <p className="text-gray-700">Share instantly across TikTok, Instagram, Facebook, and YouTube.</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900 mb-6">
                With CollabMe, every laugh, every vow, every dance move comes together in one unforgettable story. 
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Many lenses. One story.
                </span>
              </p>
              
              {/* Pre-Launch Special */}
              <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    🎉 PRE-LAUNCH SPECIAL
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Get 50% Off Bronze & Silver Tiers</h3>
                <p className="text-gray-700 mb-4">Lock in your discount when you sign up now. Limited time offer expires October 1st.</p>
                <a 
                  href="mailto:hello@edgecraftai.com?subject=CollabMe%20Pre-Launch%20Special%20-%2050%25%20Off&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI%27m%20interested%20in%20taking%20advantage%20of%20the%20pre-launch%20special%20offer%20for%20CollabMe%20(50%25%20off%20Bronze%20%26%20Silver%20tiers).%0A%0APlease%20help%20me%20with:%0A%0A-%20Securing%20my%2050%25%20discount%0A-%20Setting%20up%20my%20CollabMe%20account%0A-%20Choosing%20the%20right%20plan%20for%20my%20event%0A%0AEvent%20details:%0A-%20Event%20type:%20%0A-%20Expected%20date:%20%0A-%20Estimated%20contributors:%20%0A-%20Preferred%20plan%20(Bronze%20or%20Silver):%20%0A%0AThank%20you!"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 active:scale-95 inline-block touch-manipulation"
                >
                  Claim 50% Off Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems CollabMe Solves */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">The Challenge with Event Videos</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every event creates dozens of videos scattered across phones, cameras, and devices. CollabMe solves the chaos.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-8 bg-red-50 rounded-2xl">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Scattered Content</h3>
              <p className="text-gray-600 leading-relaxed">Videos trapped on individual phones, impossible to collect and organize efficiently</p>
            </div>
            
            <div className="text-center p-8 bg-orange-50 rounded-2xl">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Quality Loss</h3>
              <p className="text-gray-600 leading-relaxed">Compressed sharing through messaging apps destroys video quality and resolution</p>
            </div>
            
            <div className="text-center p-8 bg-yellow-50 rounded-2xl sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Lost Memories</h3>
              <p className="text-gray-600 leading-relaxed">Precious moments forgotten on devices, never properly preserved or shared</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-100 to-purple-100 px-8 py-4 rounded-full">
              <ArrowRight className="h-6 w-6 text-pink-500" />
              <span className="text-lg font-semibold text-gray-900">CollabMe transforms chaos into organized, high-quality memories</span>
            </div>
          </div>
        </div>
      </section>

      {/* About EdgeCraft & CollabMe Features */}
      <section id="features" className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">Why Choose CollabMe?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every event deserves to be captured from every angle. CollabMe transforms scattered phone videos into organized, shareable memories.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Secure Cloud</h3>
              <p className="text-gray-600 leading-relaxed">Private, encrypted storage for all your event footage with role-based access control</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Easy Sharing</h3>
              <p className="text-gray-600 leading-relaxed">QR codes and simple links make it effortless for guests to contribute their footage</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">AI-Powered</h3>
              <p className="text-gray-600 leading-relaxed">Intelligent editing tools and automated organization make creating beautiful videos effortless</p>
            </div>
          </div>
        </div>
      </section>

      {/* EdgeCraft & CollabMe Introduction */}
      {/* CollabMe How It Works Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/COLLAB_ME_LOGO_FINAL-07.svg" 
                  alt="CollabMe" 
                  className="h-8 w-auto"
                  loading="lazy"
                />
                <span className="text-lg font-semibold text-gray-600">How it Works</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Simple. Secure. Professional.
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
                Create a branded, secure cloud environment for your event. Share a simple QR code or link. Watch as footage flows in automatically, organized and ready for editing.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Secure, private cloud storage with role-based access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Brandable environment with custom admin controls</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">AI-powered editing tools and automated organization</span>
                </div>
              </div>
              
              <a 
                href="mailto:hello@edgecraftai.com?subject=CollabMe%20-%20Learn%20More%20Request&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20interested%20in%20learning%20more%20about%20CollabMe%20for%20my%20upcoming%20event.%20Please%20send%20me%20more%20information%20about:%0A%0A-%20How%20CollabMe%20works%0A-%20Pricing%20and%20plans%0A-%20Setup%20process%0A-%20Demo%20or%20trial%20options%0A%0AThank%20you!"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 active:scale-95 inline-block touch-manipulation"
              >
                Learn More
              </a>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Users className="h-8 w-8 text-pink-500 mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">Share QR Code</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Guests scan and instantly access your secure cloud</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Camera className="h-8 w-8 text-purple-500 mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">Upload Videos</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Contributors upload directly from phone or desktop</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Sparkles className="h-8 w-8 text-indigo-500 mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">AI Organization</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Smart sorting and editing tools create polished content</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Video className="h-8 w-8 text-pink-500 mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">Download & Share</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Access organized, high-quality videos anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <img 
                src="/COLLAB_ME_LOGO_FINAL-07.svg" 
                alt="CollabMe" 
                className="h-10 sm:h-12 w-auto max-w-xs"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">Choose Your Plan</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From intimate gatherings to large celebrations, we have the perfect plan for your event needs.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bronze Plan */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bronze</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$49</div>
                <p className="text-gray-600">Perfect for DIY users & videographers</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">5 hours of 1080p video footage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Private, secure cloud bucket</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Brandable cloud environment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Super Admin + Admin roles</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited contributors</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">1 year storage + training</span>
                </li>
              </ul>
              
              <a 
                href="mailto:hello@edgecraftai.com?subject=CollabMe%20Bronze%20Plan%20-%20Get%20Started&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20interested%20in%20getting%20started%20with%20the%20CollabMe%20Bronze%20plan%20for%20my%20event.%0A%0APlease%20help%20me%20with:%0A%0A-%20Setting%20up%20my%20Bronze%20plan%20account%0A-%20Payment%20and%20billing%20information%0A-%20Getting%20my%20secure%20cloud%20environment%20ready%0A-%20Training%20and%20onboarding%0A%0AEvent%20details:%0A-%20Event%20type:%20%0A-%20Expected%20date:%20%0A-%20Estimated%20contributors:%20%0A-%20Estimated%20video%20hours:%20%0A%0AThank%20you!"
                className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors touch-manipulation inline-block text-center"
              >
                Get Started
              </a>
            </div>

            {/* Silver Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow relative border-2 border-purple-500 sm:col-span-2 lg:col-span-1">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Silver</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$199</div>
                <p className="text-gray-600">Perfect for weddings & events</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Everything in Bronze, plus:</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">10 hours of 4K video footage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">AI-powered video editor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">2,000 Collab Intelligence Credits</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Perfect for milestone celebrations</span>
                </li>
              </ul>
              
              <a 
                href="mailto:hello@edgecraftai.com?subject=CollabMe%20Silver%20Plan%20-%20Get%20Started&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20interested%20in%20getting%20started%20with%20the%20CollabMe%20Silver%20plan%20for%20my%20event.%0A%0APlease%20help%20me%20with:%0A%0A-%20Setting%20up%20my%20Silver%20plan%20account%0A-%20Payment%20and%20billing%20information%0A-%20Getting%20my%20secure%20cloud%20environment%20ready%0A-%20AI%20video%20editor%20access%20and%20training%0A-%20Collab%20Intelligence%20Credits%20setup%0A%0AEvent%20details:%0A%0A-%20Event%20type:%20%0A-%20Expected%20date:%20%0A-%20Estimated%20contributors:%20%0A-%20Estimated%20video%20hours:%20%0A%0AThank%20you!"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all touch-manipulation inline-block text-center"
              >
                Get Started
              </a>
            </div>

            {/* Gold Plan */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow relative opacity-75 sm:col-span-2 lg:col-span-1">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Coming Soon
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gold</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$499</div>
                <p className="text-gray-600">Premium large-scale events</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Everything in Silver, plus:</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">30 hours of 4K video footage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">10,000 Collab Intelligence Credits</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Advanced AI Chat Editor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Interactive editing & storytelling</span>
                </li>
              </ul>
              
              <button className="w-full bg-gray-400 text-white py-3 rounded-full font-semibold cursor-not-allowed" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Program */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">Partner with CollabMe</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
            Earn commissions by introducing CollabMe to your clients. Perfect for wedding planners, event coordinators, videographers, and content creators.
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">30% Commission</h3>
                <p className="text-gray-600">Earn on every CollabMe event you refer</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Dedicated Support</h3>
                <p className="text-gray-600">Personal partner success manager</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Marketing Materials</h3>
                <p className="text-gray-600">Professional marketing assets & training</p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="mailto:hello@edgecraftai.com?subject=CollabMe%20Partnership%20Program%20-%20Application&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20interested%20in%20becoming%20a%20CollabMe%20partner%20and%20earning%2030%25%20commissions.%0A%0APlease%20send%20me%20information%20about:%0A%0A-%20Partnership%20program%20details%0A-%20Commission%20structure%0A-%20Marketing%20materials%20and%20training%0A-%20How%20to%20get%20started%0A%0AMy%20background:%0A-%20Industry:%20%0A-%20Years%20of%20experience:%20%0A-%20Typical%20client%20base:%20%0A-%20Expected%20referrals%20per%20month:%20%0A%0AThank%20you!"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all touch-manipulation inline-block"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - AI Expertise for the New Era */}
      <section id="about" className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <img 
                src="/EdgeCraft AI Logo.jpg" 
                alt="EdgeCraft AI" 
                className="h-16 sm:h-20 w-auto"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                EdgeCraft AI: Expertise for the New Era
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              EdgeCraft AI is at the forefront of transformational technology, building intelligent applications that harness artificial intelligence to improve life on Earth. Our founding team brings over 60 years of combined experience in cloud architecture, software development, startup scaling, strategic alliances, and go-to-market execution.
            </p>
            
            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Our Mission
                </span>
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We create transformational applications that connect people, preserve memories, and enhance human experiences. Through cutting-edge AI technology, we're building the tools that bring families together, help businesses collaborate more effectively, and ensure that life's most important moments are never lost.
              </p>
            </div>
            
            {/* Core Values */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Innovation First</h4>
                <p className="text-gray-600">We leverage the latest AI technologies to solve real-world problems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Human-Centered</h4>
                <p className="text-gray-600">Every application we build focuses on improving human connection and experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Global Impact</h4>
                <p className="text-gray-600">Our solutions scale to improve life on Earth for people everywhere</p>
              </div>
            </div>
          </div>
          
          {/* Core Expertise Areas */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Architecture</h3>
              <p className="text-gray-600 leading-relaxed">Enterprise-scale cloud solutions across AWS, Google Cloud, and Azure with proven scalability</p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">AWS</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">GCP</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Azure</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI & Machine Learning</h3>
              <p className="text-gray-600 leading-relaxed">Deep expertise in LLMs, computer vision, and AI-powered applications at enterprise scale</p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">OpenAI</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Gemini</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Claude</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Startup Scaling</h3>
              <p className="text-gray-600 leading-relaxed">Proven track record of scaling startups from concept to exit with strategic partnerships</p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">GTM</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">Sales</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">Alliances</span>
              </div>
            </div>
          </div>
          
          {/* Technology Leadership */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="/EdgeCraft Founders Avatar.jpg" 
                alt="EdgeCraft AI Founders" 
               className="h-32 w-48 sm:h-40 sm:w-60 rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Technology Leadership That Delivers
              </span>
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
              Kevin Fleming has deep entrepreneurial experience having led marketing efforts for leading edge technology companies, Anne Wheatley has built buyer and seller alliances for the likes of Google and Microsoft, while CTO Joe Sumpter has innovated on the leading edge for companies like Home Depot and Starbucks. From Fortune 500 enterprises to high-growth startups, our team has consistently delivered transformational technology solutions that drive real business outcomes.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-1">Fortune 500</div>
                <div className="text-gray-400 text-sm">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-1">AI-First</div>
                <div className="text-gray-400 text-sm">Architecture Approach</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-pink-400 mb-1">Global</div>
                <div className="text-gray-400 text-sm">Team Distribution</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-indigo-400 mb-1">Proven</div>
                <div className="text-gray-400 text-sm">Revenue Growth</div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="mailto:hello@edgecraftai.com?subject=EdgeCraft%20AI%20-%20Let's%20Connect&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20interested%20in%20learning%20more%20about%20EdgeCraft%20AI%20and%20your%20transformational%20AI%20applications.%0A%0APlease%20get%20in%20touch%20to%20discuss:%0A%0A-%20%0A-%20%0A-%20%0A%0AThank%20you!"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 active:scale-95 inline-block touch-manipulation"
              >
                Connect with EdgeCraft
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/EdgeCraft AI Logo.jpg" 
                  alt="EdgeCraft AI" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Transformational applications harnessing AI to improve life on Earth.
              </p>
            </div>
            
            <div>
              <h4 className="text-base font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#collabme" className="hover:text-white transition-colors touch-manipulation">CollabMe</a></li>
                <li><a href="#about" className="hover:text-white transition-colors touch-manipulation">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors touch-manipulation">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors touch-manipulation">About</a></li>
                <li>
                  <a 
                    href="mailto:hello@edgecraftai.com?subject=CollabMe%20Partnership%20Program%20-%20Application&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20interested%20in%20becoming%20a%20CollabMe%20partner%20and%20earning%2030%25%20commissions.%0A%0APlease%20send%20me%20information%20about:%0A%0A-%20Partnership%20program%20details%0A-%20Commission%20structure%0A-%20Marketing%20materials%20and%20training%0A-%20How%20to%20get%20started%0A%0AThank%20you!"
                    className="hover:text-white transition-colors touch-manipulation"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a 
                    href="mailto:hello@edgecraftai.com?subject=CollabMe%20-%20Contact&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20reaching%20out%20regarding%20CollabMe.%20Please%20get%20in%20touch%20with%20me%20to%20discuss:%0A%0A-%20%0A-%20%0A-%20%0A%0AThank%20you!"
                    className="hover:text-white transition-colors touch-manipulation"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p>&copy; 2025 EdgeCraft AI. All rights reserved.</p>
              <Link 
                to="/legaldocuments"
                className="text-gray-400 hover:text-white transition-colors underline touch-manipulation"
              >
                Legal Documents
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;