import React from 'react';
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
  Linkedin,
  TrendingUp,
  Target,
  Award,
  Globe,
  Zap,
  Shield,
  BarChart3,
  Rocket,
  Star
} from 'lucide-react';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Investor Focused */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="h-4 w-4" />
              <span>Series A Ready • $2.3B Market Opportunity</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                AI-Powered Video Collaboration
              </span>
              <span className="block text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
                Transforming the $47B Event Industry
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              EdgeCraft AI is revolutionizing event video collaboration with secure cloud infrastructure and AI-powered editing. 
              Our flagship product CollabMe addresses the $2.3B fragmented video content market, serving 2.4M+ events annually.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-blue-600">$2.3B</div>
                <div className="text-sm text-gray-600">Market Size</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600">47%</div>
                <div className="text-sm text-gray-600">CAGR Growth</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-600">2.4M+</div>
                <div className="text-sm text-gray-600">Annual Events</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-orange-600">$199</div>
                <div className="text-sm text-gray-600">Avg Revenue/Event</div>
              </div>
            </div>
            
            {/* Technology Stack - Investor Appeal */}
            <div className="mb-8">
              <p className="text-base sm:text-lg text-gray-500 mb-4 font-medium">Enterprise-Grade AI Infrastructure</p>
              <div className="flex justify-center items-center space-x-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img 
                  src="/google-cloud-logo.svg" 
                  alt="Google Cloud" 
                  className="h-6 w-auto"
                />
                <img 
                  src="/aws logo.png" 
                  alt="AWS" 
                  className="h-6 w-auto"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" 
                  alt="Google Gemini" 
                  className="h-6 w-auto"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" 
                  alt="OpenAI" 
                  className="h-6 w-auto"
                />
                <img 
                  src="/anthropic logo.png" 
                  alt="Anthropic" 
                  className="h-6 w-auto"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a 
                href="mailto:hello@edgecraftai.com?subject=Investment%20Opportunity%20-%20EdgeCraft%20AI&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20interested%20in%20learning%20more%20about%20investment%20opportunities%20with%20EdgeCraft%20AI.%20Please%20send%20me:%0A%0A-%20Pitch%20deck%20and%20business%20plan%0A-%20Financial%20projections%20and%20metrics%0A-%20Market%20analysis%20and%20competitive%20landscape%0A-%20Team%20background%20and%20credentials%0A-%20Current%20funding%20round%20details%0A%0AInvestor%20Information:%0A-%20Fund/Organization:%20%0A-%20Investment%20Focus:%20%0A-%20Typical%20Check%20Size:%20%0A%0AThank%20you!"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105 active:scale-95 inline-flex items-center space-x-2 touch-manipulation"
              >
                <Rocket className="h-5 w-5" />
                <span>Investment Opportunity</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/edgecraft-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-4 rounded-full hover:bg-blue-700 transition-colors touch-manipulation"
                aria-label="Follow EdgeCraft AI on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="font-semibold">Follow Our Journey</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity & Traction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Market Opportunity & Traction</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Positioned at the intersection of AI, cloud infrastructure, and the rapidly growing event industry
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Massive Market Opportunity</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">$47B Global Event Industry</div>
                    <div className="text-gray-600">Growing at 11.2% CAGR through 2028</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">$2.3B Addressable Market</div>
                    <div className="text-gray-600">Video collaboration & content management</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">2.4M+ Annual Events</div>
                    <div className="text-gray-600">In our target segments (weddings, corporate, celebrations)</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Early Traction Indicators</h3>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">150+</div>
                    <div className="text-sm text-gray-600">Beta Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">89%</div>
                    <div className="text-sm text-gray-600">User Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">$25K</div>
                    <div className="text-sm text-gray-600">Pre-Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">4.8/5</div>
                    <div className="text-sm text-gray-600">User Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CollabMe Product Showcase */}
      <section id="collabme" className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <img 
                src="/collbmelogo.svg" 
                alt="CollabMe" 
                className="h-20 lg:h-24 w-auto max-w-xs"
                loading="eager"
              />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Our Flagship Product
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              CollabMe transforms scattered event footage into organized, professional video content through 
              AI-powered collaboration and secure cloud infrastructure. Targeting the $2.3B fragmented video market.
            </p>
            
            {/* Product Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="text-xl font-bold text-pink-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="text-xl font-bold text-purple-600">256-bit</div>
                <div className="text-sm text-gray-600">Encryption</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="text-xl font-bold text-indigo-600">4K</div>
                <div className="text-sm text-gray-600">Video Quality</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="text-xl font-bold text-blue-600">AI</div>
                <div className="text-sm text-gray-600">Powered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Competitive Advantages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proprietary technology and strategic positioning create sustainable competitive moats
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-First Architecture</h3>
              <p className="text-gray-600 leading-relaxed">Proprietary AI models for video organization, quality enhancement, and automated editing - 18 months ahead of competitors</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600 leading-relaxed">Bank-grade encryption, GDPR compliance, and role-based access control - addressing enterprise market needs</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Network Effects</h3>
              <p className="text-gray-600 leading-relaxed">Each event creates viral adoption through guest participation, driving organic growth and reducing CAC by 67%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model & Projections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Revenue Model & Projections</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple revenue streams with high margins and predictable growth
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Revenue Streams</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Per-Event Licensing</h4>
                    <span className="text-green-600 font-bold">70% Margin</span>
                  </div>
                  <p className="text-gray-600 text-sm">$49-$499 per event based on features and storage</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Enterprise SaaS</h4>
                    <span className="text-green-600 font-bold">85% Margin</span>
                  </div>
                  <p className="text-gray-600 text-sm">$2K-$50K annual contracts for event companies</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Partner Commissions</h4>
                    <span className="text-green-600 font-bold">30% Share</span>
                  </div>
                  <p className="text-gray-600 text-sm">Revenue sharing with wedding planners and venues</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">5-Year Projections</h3>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Year 1 Revenue</span>
                    <span className="font-bold text-green-600">$250K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Year 2 Revenue</span>
                    <span className="font-bold text-green-600">$1.2M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Year 3 Revenue</span>
                    <span className="font-bold text-green-600">$4.8M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Year 5 Revenue</span>
                    <span className="font-bold text-green-600">$25M</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold">Gross Margin</span>
                      <span className="font-bold text-green-600">78%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Strategy */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <img 
                src="/collbmelogo.svg" 
                alt="CollabMe" 
                className="h-12 w-auto max-w-xs"
                loading="lazy"
              />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pricing Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Value-based pricing with clear upgrade paths and enterprise scalability
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bronze Plan */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bronze</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$49</div>
                <p className="text-gray-600">Entry-level market penetration</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">5 hours 1080p storage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Secure cloud environment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited contributors</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">1 year storage</span>
                </li>
              </ul>
              
              <div className="text-center text-sm text-gray-500 mb-4">
                Target: 60% of market
              </div>
            </div>

            {/* Silver Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow relative border-2 border-purple-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Revenue Driver
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Silver</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$199</div>
                <p className="text-gray-600">Primary revenue generator</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">10 hours 4K storage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">AI-powered editor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">2K AI credits</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Premium features</span>
                </li>
              </ul>
              
              <div className="text-center text-sm text-gray-500 mb-4">
                Target: 35% of market
              </div>
            </div>

            {/* Gold Plan */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$2K+</div>
                <p className="text-gray-600">High-margin enterprise</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited storage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Advanced AI suite</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">White-label options</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated support</span>
                </li>
              </ul>
              
              <div className="text-center text-sm text-gray-500 mb-4">
                Target: 5% of market, 40% of revenue
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Advisors */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced team with proven track record in AI, enterprise software, and scaling technology companies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">CEO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Founder & CEO</h3>
              <p className="text-gray-600 mb-3">Former Senior AI Engineer at Google</p>
              <div className="text-sm text-gray-500">
                <p>• 8+ years AI/ML experience</p>
                <p>• Led teams of 15+ engineers</p>
                <p>• Stanford CS, MIT MBA</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">CTO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Co-Founder & CTO</h3>
              <p className="text-gray-600 mb-3">Former Principal Engineer at AWS</p>
              <div className="text-sm text-gray-500">
                <p>• 12+ years cloud infrastructure</p>
                <p>• Built systems serving 100M+ users</p>
                <p>• Carnegie Mellon CS</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">VP</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">VP of Sales</h3>
              <p className="text-gray-600 mb-3">Former Director at Salesforce</p>
              <div className="text-sm text-gray-500">
                <p>• $50M+ in enterprise sales</p>
                <p>• Built 0-to-1 sales teams</p>
                <p>• Wharton MBA</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Advisory Board</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="font-semibold text-gray-900">Former VP Engineering</div>
                <div className="text-sm text-gray-600">Meta (Facebook)</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="font-semibold text-gray-900">Managing Partner</div>
                <div className="text-sm text-gray-600">Tier 1 VC Fund</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="font-semibold text-gray-900">Former CMO</div>
                <div className="text-sm text-gray-600">Adobe Creative Cloud</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="font-semibold text-gray-900">Industry Expert</div>
                <div className="text-sm text-gray-600">Event Technology</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Series A Investment Opportunity</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Seeking $3M Series A to accelerate growth, expand enterprise sales, and capture market leadership 
            in the $2.3B video collaboration space.
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Use of Funds</h3>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Engineering & AI Development</span>
                    <span className="font-bold text-green-600">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Sales & Marketing</span>
                    <span className="font-bold text-green-600">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Operations & Infrastructure</span>
                    <span className="font-bold text-green-600">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Working Capital</span>
                    <span className="font-bold text-green-600">10%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Highlights</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-700">Massive $47B market opportunity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-700">Proven early traction & product-market fit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-700">Experienced team with enterprise exits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-700">Defensible AI technology moats</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-700">Clear path to $100M+ revenue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@edgecraftai.com?subject=Series%20A%20Investment%20-%20EdgeCraft%20AI&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20interested%20in%20discussing%20the%20Series%20A%20investment%20opportunity.%20Please%20send%20me:%0A%0A-%20Complete%20pitch%20deck%20and%20executive%20summary%0A-%20Financial%20model%20and%20projections%0A-%20Market%20analysis%20and%20competitive%20landscape%0A-%20Technical%20architecture%20and%20IP%20overview%0A-%20Team%20backgrounds%20and%20references%0A-%20Current%20cap%20table%20and%20terms%0A%0AInvestor%20Information:%0A-%20Fund%20Name:%20%0A-%20Investment%20Focus:%20%0A-%20Check%20Size%20Range:%20%0A-%20Timeline%20for%20Decision:%20%0A%0AThank%20you!"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105 active:scale-95 inline-flex items-center space-x-2 touch-manipulation"
            >
              <Rocket className="h-5 w-5" />
              <span>Request Pitch Deck</span>
            </a>
            <a 
              href="mailto:hello@edgecraftai.com?subject=Partnership%20Opportunity%20-%20EdgeCraft%20AI&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20interested%20in%20exploring%20partnership%20opportunities%20with%20EdgeCraft%20AI.%20Please%20send%20me%20information%20about:%0A%0A-%20Strategic%20partnership%20opportunities%0A-%20Technology%20integration%20possibilities%0A-%20Go-to-market%20collaboration%0A-%20Investment%20and%20partnership%20terms%0A%0AOrganization%20Information:%0A-%20Company%20Name:%20%0A-%20Industry%20Focus:%20%0A-%20Partnership%20Interest:%20%0A%0AThank%20you!"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center space-x-2 touch-manipulation"
            >
              <Building2 className="h-5 w-5" />
              <span>Strategic Partnership</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/EdgeCraft AI Logo.jpg" 
                  alt="EdgeCraft AI" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                Transformational AI applications revolutionizing the $47B event industry.
              </p>
              <div className="text-sm text-gray-400">
                <p>Series A Ready</p>
                <p>$3M Funding Round</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-base font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#collabme" className="hover:text-white transition-colors touch-manipulation">CollabMe Platform</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors touch-manipulation">Pricing Strategy</a></li>
                <li>
                  <a 
                    href="mailto:hello@edgecraftai.com?subject=Product%20Demo%20Request&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'd%20like%20to%20schedule%20a%20product%20demo%20of%20CollabMe.%20Please%20let%20me%20know%20your%20availability.%0A%0AThank%20you!"
                    className="hover:text-white transition-colors touch-manipulation"
                  >
                    Request Demo
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base font-semibold mb-4">Investors</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a 
                    href="mailto:hello@edgecraftai.com?subject=Series%20A%20Investment%20-%20EdgeCraft%20AI&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20interested%20in%20discussing%20the%20Series%20A%20investment%20opportunity.%20Please%20send%20me%20the%20pitch%20deck%20and%20financial%20projections.%0A%0AThank%20you!"
                    className="hover:text-white transition-colors touch-manipulation"
                  >
                    Investment Opportunity
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:hello@edgecraftai.com?subject=Partnership%20Opportunity%20-%20EdgeCraft%20AI&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20interested%20in%20exploring%20strategic%20partnership%20opportunities.%20Please%20get%20in%20touch.%0A%0AThank%20you!"
                    className="hover:text-white transition-colors touch-manipulation"
                  >
                    Strategic Partnerships
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/edgecraft-ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors touch-manipulation"
                  >
                    Company Updates
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a 
                    href="mailto:hello@edgecraftai.com?subject=General%20Inquiry&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20reaching%20out%20regarding%20EdgeCraft%20AI.%20Please%20get%20in%20touch.%0A%0AThank%20you!"
                    className="hover:text-white transition-colors touch-manipulation"
                  >
                    hello@edgecraftai.com
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/edgecraft-ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors touch-manipulation"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2025 EdgeCraft AI. All rights reserved. | Series A Funding Round Open</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;