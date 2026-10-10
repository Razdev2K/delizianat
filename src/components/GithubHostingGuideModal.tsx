import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Globe, GitBranch, Shield, Sparkles } from 'lucide-react';

interface GithubHostingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GithubHostingGuideModal: React.FC<GithubHostingGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2500);
    }
  };

  const cnameContent = 'delizianaturally.com';

  const actionWorkflow = `name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-[#FBF9F5] rounded-3xl max-w-3xl w-full border border-[#D5CDBC] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#F4EFE6] border-b border-[#DFD6C3] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#EBF3DF] flex items-center justify-center text-[#557A27] border border-[#D5E5C3]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1F2913]">
                Free GitHub Pages Hosting Guide for delizianaturally.com
              </h3>
              <p className="text-xs text-[#736F66]">
                100% Free Hosting • Custom Domain • Automatic SSL Certificate
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white hover:bg-[#FAF8F5] text-[#45423B] transition-colors border border-[#DDD3BF] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-[#454138] leading-relaxed">
          
          <div className="bg-[#EBF3DF] p-4 rounded-xl border border-[#D5E5C3] flex items-center justify-between gap-3">
            <div>
              <span className="font-bold text-[#1F2913] block">Ready for 100% Free Static Hosting</span>
              <span className="text-xs text-[#4F6824]">
                This entire React Vite application compiles to pure HTML/CSS/JS with no server requirements.
              </span>
            </div>
            <span className="text-xs font-mono bg-white px-2.5 py-1 rounded-md text-[#3D5A19] font-bold border border-[#C5DCAB]">
              delizianaturally.com
            </span>
          </div>

          {/* Step 1 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-[#1F2913]">
              <span className="w-6 h-6 rounded-full bg-[#557A27] text-white flex items-center justify-center text-xs">1</span>
              <span>Create Your GitHub Repository</span>
            </div>
            <p className="pl-8 text-xs text-[#5C574E]">
              Upload all files from this project into a new public or private repository on GitHub (e.g. <code>delizia-landing</code>).
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-[#1F2913]">
              <span className="w-6 h-6 rounded-full bg-[#557A27] text-white flex items-center justify-center text-xs">2</span>
              <span>Add CNAME File for delizianaturally.com</span>
            </div>
            <p className="pl-8 text-xs text-[#5C574E]">
              Create a file named <code>public/CNAME</code> containing exactly your domain name:
            </p>
            <div className="pl-8">
              <div className="bg-[#2C2B29] text-amber-200 p-3 rounded-xl flex items-center justify-between font-mono text-xs">
                <span>{cnameContent}</span>
                <button
                  onClick={() => copyToClipboard(cnameContent, 'cname')}
                  className="text-xs bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded flex items-center gap-1 cursor-pointer"
                >
                  {copiedCode === 'cname' ? <Check className="w-3.5 h-3.5 text-green-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode === 'cname' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-[#1F2913]">
              <span className="w-6 h-6 rounded-full bg-[#557A27] text-white flex items-center justify-center text-xs">3</span>
              <span>Point Your DNS (GoDaddy, Namecheap, Cloudflare, etc.)</span>
            </div>
            <p className="pl-8 text-xs text-[#5C574E]">
              In your domain registrar DNS settings for <strong>delizianaturally.com</strong>, add these standard GitHub Pages A records:
            </p>
            <div className="pl-8">
              <div className="bg-[#FAF7F0] border border-[#DDD3BF] p-3 rounded-xl font-mono text-xs space-y-1 text-[#2C2B29]">
                <div>Type: A | Host: @ | Value: 185.199.108.153</div>
                <div>Type: A | Host: @ | Value: 185.199.109.153</div>
                <div>Type: A | Host: @ | Value: 185.199.110.153</div>
                <div>Type: A | Host: @ | Value: 185.199.111.153</div>
                <div>Type: CNAME | Host: www | Value: [your-github-username].github.io</div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-[#1F2913]">
              <span className="w-6 h-6 rounded-full bg-[#557A27] text-white flex items-center justify-center text-xs">4</span>
              <span>Enable GitHub Actions for Auto-Deploy</span>
            </div>
            <p className="pl-8 text-xs text-[#5C574E]">
              Go to your repo Settings → <strong>Pages</strong> → Build and deployment → Source: select <strong>GitHub Actions</strong>. 
              Place this file at <code>.github/workflows/deploy.yml</code>:
            </p>
            <div className="pl-8">
              <div className="bg-[#2C2B29] text-stone-200 p-3 rounded-xl relative font-mono text-[11px] max-h-48 overflow-y-auto">
                <button
                  onClick={() => copyToClipboard(actionWorkflow, 'workflow')}
                  className="absolute top-2 right-2 text-xs bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded flex items-center gap-1 cursor-pointer"
                >
                  {copiedCode === 'workflow' ? <Check className="w-3.5 h-3.5 text-green-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode === 'workflow' ? 'Copied' : 'Copy Workflow'}</span>
                </button>
                <pre>{actionWorkflow}</pre>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-[#1F2913]">
              <span className="w-6 h-6 rounded-full bg-[#557A27] text-white flex items-center justify-center text-xs">5</span>
              <span>Check "Enforce HTTPS" in GitHub Settings</span>
            </div>
            <p className="pl-8 text-xs text-[#5C574E]">
              GitHub will automatically issue a free Let's Encrypt SSL certificate for <strong>https://delizianaturally.com</strong>.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-[#F4EFE6] border-t border-[#DFD6C3] flex items-center justify-between">
          <span className="text-xs text-[#736F66]">
            Custom Domain Target: <strong>delizianaturally.com</strong>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white border border-[#D5CDBC] text-xs font-semibold text-[#383734] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
