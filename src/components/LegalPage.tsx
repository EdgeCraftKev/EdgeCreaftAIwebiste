import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LegalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/"
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 touch-manipulation"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Main Site</span>
        </Link>

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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="#sms-policy" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">SMS Terms</h3>
                <p className="text-sm text-gray-600 mt-1">Text messaging policies</p>
              </a>
              <a href="#terms-conditions" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">Terms of Service</h3>
                <p className="text-sm text-gray-600 mt-1">Service usage terms</p>
              </a>
              <a href="#privacy-policy" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">Privacy Policy</h3>
                <p className="text-sm text-gray-600 mt-1">How we protect your data</p>
              </a>
              <a href="#community-guidelines" className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">Community Guidelines</h3>
                <p className="text-sm text-gray-600 mt-1">Community standards</p>
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

          {/* Terms of Service */}
          <section id="terms-conditions" className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">CollabMe Terms of Service</h2>
              
              <div className="text-sm text-gray-600 mb-6">
                <p><strong>EdgeCraft AI, Inc.</strong></p>
                <p>Last Updated: September 2, 2025</p>
              </div>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Your Relationship With Us</h3>
                  <p>These Terms of Service ("Terms") form a legally binding agreement between you and EdgeCraft AI, Inc. ("Company", "we", or "us"). They govern your use of CollabMe, including its mobile applications, web platforms, event-driven cloud environments, AI-powered editing tools, and all related services (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Eligibility & Accounts</h3>
                  <ul className="space-y-2">
                    <li>You must be at least 13 years old to use CollabMe. If you are under 18 (or under the age of majority in your jurisdiction), you may only use the Services with the consent of a parent or legal guardian.</li>
                    <li>You must provide accurate, current information when creating an account and maintain the confidentiality of your credentials.</li>
                    <li>You are responsible for all activity that occurs under your account.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Service Features & Subscriptions</h3>
                  <ul className="space-y-2">
                    <li>CollabMe offers free and paid subscription tiers ("Service Plans"). Paid subscriptions may include additional cloud storage, AI editing credits, and premium features.</li>
                    <li>Pricing, billing cycles, and refund policies are shown at purchase.</li>
                    <li>We reserve the right to update or change features, pricing, and storage limits, provided that existing paid subscriptions are honored until their renewal date.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4. AI Features</h3>
                  <ul className="space-y-2">
                    <li>CollabMe integrates artificial intelligence (AI) tools from the Company and third parties (e.g., video analysis, semantic tagging, frame rate optimization, soundtrack generation).</li>
                    <li>AI outputs may be incomplete, inaccurate, or reflect biases. Users must review outputs before use or publication.</li>
                    <li>You confirm you have all rights necessary to submit inputs to AI tools. You may not misuse AI features to generate harmful, unlawful, or misleading content.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Intellectual Property</h3>
                  <ul className="space-y-2">
                    <li>You retain ownership of the content you upload. By uploading, you grant the Company a worldwide, non-exclusive, royalty-free license to host, process, display, and transmit content for the purpose of providing the Services.</li>
                    <li>We own all rights in our software, platform, trademarks, and proprietary technologies. Unauthorized use is prohibited.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Prohibited Conduct</h3>
                  <p className="mb-2">You may not:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Upload unlawful, harmful, infringing, or explicit content.</li>
                    <li>Misuse AI features to generate deepfakes of minors, harassment, misinformation, or unauthorized impersonations.</li>
                    <li>Harass, abuse, or threaten others.</li>
                    <li>Reverse engineer, modify, or disrupt our Services.</li>
                    <li>Impersonate any person or misrepresent affiliation.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Sharing to Third-Party Platforms</h3>
                  <p className="mb-3">CollabMe may include features that allow you to share or export your User Content to third-party platforms such as LinkedIn, Instagram, TikTok, Snapchat, YouTube, or other social networks. By using these features, you acknowledge and agree that:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>You remain solely responsible for your User Content once it leaves the CollabMe platform.</li>
                    <li>CollabMe has no control over, and assumes no responsibility for, the content policies, practices, or actions of any third-party platform.</li>
                    <li>You must comply with the terms and community standards of those third-party platforms.</li>
                    <li>CollabMe does not guarantee compatibility of your User Content with those platforms, and any issues relating to display, quality, or availability are outside of our responsibility.</li>
                    <li>By choosing to share, you represent that you have all rights and permissions necessary to distribute your User Content to those platforms.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Enforcement & Termination</h3>
                  <ul className="space-y-2">
                    <li>We may suspend, limit, or terminate accounts at our discretion for violations of these Terms.</li>
                    <li>In cases of suspected illegal activity, we may cooperate with law enforcement.</li>
                    <li>You may cancel your account at any time; deletion may result in permanent loss of content.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Limitation of Liability</h3>
                  <ul className="space-y-2">
                    <li>To the fullest extent permitted by law, our liability is limited to the greater of $50 or the amount you paid us in the 12 months preceding the claim.</li>
                    <li>We are not liable for indirect, incidental, special, or consequential damages.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Governing Law & Disputes</h3>
                  <ul className="space-y-2">
                    <li>These Terms are governed by the laws of the State of Delaware, U.S.A.</li>
                    <li>Any disputes must be resolved by binding arbitration in Wilmington, Delaware, except where prohibited by law.</li>
                    <li>Class action lawsuits and jury trials are waived.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section id="privacy-policy" className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">CollabMe Privacy Policy</h2>
              
              <div className="text-sm text-gray-600 mb-6">
                <p><strong>EdgeCraft AI, Inc.</strong></p>
                <p>Last Updated: August 29, 2025</p>
              </div>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h3>
                  <p>EdgeCraft AI, Inc. ("Company," "CollabMe," "we," or "us") values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use the CollabMe platform, including our website, mobile apps, cloud services, AI-assisted video editing tools, and any other related services (the "Services").</p>
                  <p>This Privacy Policy applies to all users worldwide, unless supplemented by jurisdiction-specific notices (see California and GDPR/UK sections below).</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h3>
                  <p className="mb-3">We may collect the following categories of personal information:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Identifiers:</strong> name, email address, account credentials, contact details.</li>
                    <li><strong>Payment Information:</strong> billing details, subscription data, processed securely by third-party providers.</li>
                    <li><strong>Content & Media:</strong> videos, photos, and metadata uploaded to event buckets.</li>
                    <li><strong>Technical Data:</strong> IP address, device information, cookies, log data, geolocation.</li>
                    <li><strong>Usage Data:</strong> how you interact with the Services (edits, features used, engagement).</li>
                    <li><strong>AI Data:</strong> information you provide for AI-powered features and outputs generated based on your inputs.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h3>
                  <p className="mb-3">We use personal information to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide and improve the Services, including video storage, editing, and sharing.</li>
                    <li>Process subscriptions and payments.</li>
                    <li>Enable event participation and permissions (e.g., Super Admin, Admin, Upload-only).</li>
                    <li>Personalize recommendations, including AI-driven editing suggestions.</li>
                    <li>Communicate with you about updates, offers, and support.</li>
                    <li>Detect, prevent, and address security issues or misuse.</li>
                    <li>Comply with legal obligations.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Sharing of Information</h3>
                  <p className="mb-3">We may share information with:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Service Providers:</strong> hosting, analytics, customer support, and payment processors.</li>
                    <li><strong>Event Participants:</strong> if you grant access to your content through sharing features.</li>
                    <li><strong>Legal Authorities:</strong> when required to comply with applicable law.</li>
                    <li><strong>Business Transfers:</strong> in the event of a merger, acquisition, or sale of assets.</li>
                  </ul>
                  <p>We do not sell personal information and we do not share data for cross-context behavioral advertising.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Sharing and Integrations</h4>
                  <p className="mb-3">CollabMe allows you to export, share, or publish videos and other User Content to third-party platforms (e.g., LinkedIn, Instagram, TikTok, Snapchat, YouTube, or others). When you choose to share to these platforms, you acknowledge and agree that:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The content you share will be subject to the terms, policies, and practices of those third-party platforms, which are not controlled by CollabMe.</li>
                    <li>We are not responsible for how third-party platforms use, store, or distribute your content once shared.</li>
                    <li>You are solely responsible for ensuring that your sharing complies with the terms of those platforms and that you have all necessary rights to distribute the content there.</li>
                    <li>Any analytics, engagement, or monetization features offered by third-party platforms are outside our control.</li>
                    <li>CollabMe does not automatically post to any third-party platform without your explicit action.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5. AI Processing</h3>
                  <p>Some CollabMe features use third-party AI services (e.g., OpenAI, Google Video Intelligence) for video analysis, smart clipping, and recommendations.</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>AI outputs are based on user inputs and may not always be accurate.</li>
                    <li>You remain responsible for the content you upload and any use of AI outputs.</li>
                    <li>We do not use AI for automated decision-making that produces legal or similarly significant effects without human review.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Data Retention</h3>
                  <p className="mb-3">We retain personal information only as long as necessary to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide Services,</li>
                    <li>Comply with laws,</li>
                    <li>Resolve disputes,</li>
                    <li>Enforce agreements.</li>
                  </ul>
                  <p>After retention periods expire, we securely delete or anonymize data.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Your Choices & Rights</h3>
                  <p>Depending on your location, you may have rights regarding your personal information, including access, correction, deletion, portability, objection, and withdrawal of consent. See the jurisdiction-specific sections below for details.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Security</h3>
                  <p>We implement industry-standard safeguards to protect personal data, including encryption in transit and at rest. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Children's Privacy</h3>
                  <p>CollabMe is not directed to children under the age of 13 (or under 16 in the EEA/UK). We do not knowingly collect data from minors without parental consent.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Changes to this Policy</h3>
                  <p>We may update this Privacy Policy from time to time. The "Last Updated" date at the top indicates when changes take effect. Continued use of the Services after updates means you accept the revised Policy.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Contact Us</h3>
                  <p>For questions about this Privacy Policy, please contact us at:</p>
                  <p>Email: <a href="mailto:privacy@edgecraftai.com" className="text-blue-600 hover:text-blue-700">privacy@edgecraftai.com</a></p>
                </div>

                {/* California Privacy Notice */}
                <div className="bg-blue-100 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">California Privacy Notice (CCPA/CPRA)</h3>
                  <p className="mb-3">This section applies to California residents and supplements the Privacy Policy.</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Your Rights</h4>
                  <p className="mb-2">You have the following rights under CCPA/CPRA:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Right to Know: categories and specific pieces of data collected.</li>
                    <li>Right to Access & Portability: receive a copy of your data.</li>
                    <li>Right to Delete: request deletion, subject to exceptions.</li>
                    <li>Right to Correct: request corrections of inaccurate data.</li>
                    <li>Right to Limit Sensitive Data Use: restrict processing of sensitive data to necessary purposes.</li>
                    <li>Right to Opt Out: opt out of sale or sharing (we do not sell/share).</li>
                    <li>Right to Non-Discrimination: no retaliation for exercising rights.</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Exercising Your Rights</h4>
                  <p>Submit a verifiable request by emailing <a href="mailto:privacy@edgecraftai.com" className="text-blue-600 hover:text-blue-700">privacy@edgecraftai.com</a>.</p>
                </div>

                {/* GDPR Notice */}
                <div className="bg-indigo-100 rounded-lg p-6 mt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">GDPR / UK GDPR Privacy Addendum</h3>
                  <p className="mb-3">This section applies to users in the EEA, Switzerland, and UK.</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Legal Bases for Processing</h4>
                  <p className="mb-2">We process data under these bases:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Contractual necessity,</li>
                    <li>Consent,</li>
                    <li>Legitimate interests,</li>
                    <li>Legal obligations.</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Your Rights</h4>
                  <p className="mb-2">Under GDPR/UK GDPR, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Access, Rectify, Erase, Restrict, Port, Object, Withdraw consent.</li>
                  </ul>
                  <p className="mt-2">To exercise these rights, email <a href="mailto:privacy@edgecraftai.com" className="text-blue-600 hover:text-blue-700">privacy@edgecraftai.com</a>.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Community Guidelines */}
          <section id="community-guidelines" className="mb-12">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">CollabMe Community Guidelines</h2>
              
              <div className="text-sm text-gray-600 mb-6">
                <p><strong>EdgeCraft AI, Inc.</strong></p>
                <p>Last Updated: August 29, 2025</p>
              </div>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Respect & Inclusion</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Treat all users with dignity and respect.</li>
                    <li>Do not harass, bully, or discriminate based on race, religion, gender, age, disability, or sexual orientation.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Content Standards</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Do not upload: illegal, explicit, violent, defamatory, or infringing material.</li>
                    <li>Only share media you have rights to.</li>
                    <li>Respect the intellectual property of others.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Responsible Use of AI</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Do not use AI tools to create harmful or misleading content.</li>
                    <li>Prohibited: deepfakes of minors, non-consensual impersonations, or misinformation.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Event Etiquette</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Share only event-relevant content.</li>
                    <li>Do not spam or flood an event bucket.</li>
                    <li>Respect the privacy of hosts and participants.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Privacy of Others</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Do not post sensitive personal information without consent.</li>
                    <li>Avoid recording or uploading private conversations without permission.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Reporting Violations</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Report misconduct via <a href="mailto:report@edgecraftai.com" className="text-blue-600 hover:text-blue-700">report@edgecraftai.com</a>.</li>
                    <li>We investigate and may remove content or suspend accounts.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Enforcement</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Actions may include warnings, removal, suspension, or permanent bans.</li>
                    <li>Serious violations may be referred to law enforcement.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Appeals</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>If you believe moderation was in error, appeal at <a href="mailto:appeals@edgecraftai.com" className="text-blue-600 hover:text-blue-700">appeals@edgecraftai.com</a>.</li>
                    <li>Appeals will be reviewed by a separate review team.</li>
                  </ul>
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