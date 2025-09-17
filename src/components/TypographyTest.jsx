import React from 'react';

const TypographyTest = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Typography Test</h1>
      <p>This is a test of the @tailwindcss/typography plugin. If styled properly, you'll see nice typography for this content.</p>
      <h2>Features</h2>
      <ul>
        <li>Beautiful typography</li>
        <li>Dark mode support</li>
        <li>Responsive design</li>
      </ul>
      <blockquote>
        This is a blockquote that should be styled by the typography plugin.
      </blockquote>
    </div>
  );
};

export default TypographyTest;
