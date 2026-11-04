// Replace your HashRouter with this - FIXES SEO
// 1. npm install react-router-dom
// 2. Replace App.jsx content with this pattern:

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/my-recovery-journey">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-here" element={<StartHere />} />
        <Route path="/my-story" element={<MyStory />} />
        <Route path="/journey-updates" element={<JourneyUpdates />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/gratitude" element={<Gratitude />} />
        <Route path="/tools/milestones" element={<Milestones />} />
        <Route path="/tools/grounding" element={<Grounding />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/paths" element={<RecoveryPaths />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/faith" element={<Faith />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/sober-living" element={<SoberLiving />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}

// Add to index.html <head> the SPA restore script from HEAD_SNIPPET.html
