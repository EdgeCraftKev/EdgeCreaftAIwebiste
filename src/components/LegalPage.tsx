import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 touch-manipulation"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Main Site</span>
        </button>

        <div className="prose prose-lg max-w-none">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <img 
                src="/EdgeCraft AI Logo.jpg" 
                alt="EdgeCraft AI" 
                className="h-16 w-auto"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Legal Documents</h1>
            <p className="text-lg text-gray-600">Terms, Policies, and Legal Information</p>
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <a href="#sms-policy" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">SMS Terms</h3>
                <p className="text-sm text-gray-600 mt-1">Text messaging policies</p>
              </a>
              <a href="#privacy-policy" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">Privacy Policy</h3>
                <p className="text-sm text-gray-600 mt-1">How we protect your data</p>
              </a>
              <a href="#terms-conditions" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">Terms of Service</h3>
                <p className="text-sm text-gray-600 mt-1">Service usage terms</p>
              </a>
            </div>
          </div>

          {/* SMS Terms & Conditions */}
          <section id="sms-policy" className="mb-12">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">CollabMe SMS Terms & Conditions</h2>
              
              <div className="text-sm text-gray-600 mb-6">
                <p><strong>EdgeCraft AI, Inc.</strong></p>
                <p>Last Updated: September 10, 2025</p>
              </div>

              <div className="space-y-6 text-gray-700">
                <p>By opting in to receive SMS messages from CollabMe ("we," "us," "our"), you agree to the following terms:</p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Program Description</h3>
                  <p className="mb-3">CollabMe uses SMS to communicate with you regarding:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Account notifications (e.g., sign-in alerts, password resets)</li>
                    <li>Two-factor authentication (2FA) and security alerts</li>
                    <li>Delivery or upload confirmations</li>
                    <li>Marketing or promotional updates (only if you separately opt in)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Consent & Opt-In</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>By providing your mobile number and checking the opt-in box (or similar mechanism), you consent to receive recurring text messages from CollabMe.</li>
                    <li>Consent to receive marketing texts is not required as a condition of purchasing or using our services.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Frequency</h3>
                  <p className="mb-3">Message frequency varies by activity:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Transactional:</strong> Sent as needed to support your account and services.</li>
                    <li><strong>Marketing:</strong> No more than 1 marketing message per week.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Opt-Out Instructions</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You may opt out of all SMS communications at any time by replying <strong>STOP</strong> to any message.</li>
                    <li>You will receive a final confirmation message acknowledging your opt-out.</li>
                    <li>Even after opting out, you may continue to receive required transactional or legal messages where permitted by law.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Costs</h3>
                  <p>Message and data rates may apply. Check with your mobile provider for details.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Support</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>For help, reply <strong>HELP</strong> to any message.</li>
                    <li>You may also contact us at: <a href="mailto:privacy@edgecraftai.com" className="text-blue-600 hover:text-blue-700">privacy@edgecraftai.com</a>.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Privacy</h3>
                  <p>Your mobile number and SMS data will be handled in accordance with our <a href="#privacy-policy" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>. We do not sell or share your mobile number with third parties for marketing purposes.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Carrier Liability</h3>
                  <p>Mobile carriers are not liable for delayed or undelivered messages.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section id="privacy-policy" className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
              
              <div className="text-sm text-gray-600 mb-6">
                <p><strong>EdgeCraft AI, Inc.</strong></p>
                <p>Last Updated: January 15, 2025</p>
              </div>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h3>
                  <p className="mb-3">We collect information you provide directly to us, such as:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Account registration information (email, name)</li>
                    <li>Video content and metadata you upload to CollabMe</li>
                    <li>Communication preferences and settings</li>
                    <li>Support and correspondence records</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide and maintain our services</li>
                    <li>Process and organize your video content</li>
                    <li>Send account notifications and security alerts</li>
                    <li>Improve our AI-powered features</li>
                    <li>Provide customer support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h3>
                  <p>We implement enterprise-grade security measures including encryption, secure cloud storage, and role-based access controls to protect your data and video content.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
                  <p>For privacy-related questions, contact us at: <a href="mailto:privacy@edgecraftai.com" className="text-blue-600 hover:text-blue-700">privacy@edgecraftai.com</a></p>
                </div>
              </div>
            </div>
          </section>

          {/* Terms of Service */}
          <section id="terms-conditions" className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Terms of Service</h2>
              
              <div className="text-sm text-gray-600 mb-6">
                <p><strong>EdgeCraft AI, Inc.</strong></p>
                <p>Last Updated: January 15, 2025</p>
              </div>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Acceptance of Terms</h3>
                  <p>By accessing or using CollabMe services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Description</h3>
                  <p>CollabMe provides secure cloud video collaboration services, allowing users to collect, organize, and share video content from events with AI-powered editing tools.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">User Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide accurate account information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use the service in compliance with applicable laws</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not upload harmful, illegal, or inappropriate content</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Ownership</h3>
                  <p>You retain ownership of all video content you upload. We only process your content to provide our services and do not claim ownership rights.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Availability</h3>
                  <p>We strive to maintain high service availability but cannot guarantee uninterrupted access. Scheduled maintenance will be communicated in advance when possible.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <p>For questions about these terms, contact us at: <a href="mailto:legal@edgecraftai.com" className="text-blue-600 hover:text-blue-700">legal@edgecraftai.com</a></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;