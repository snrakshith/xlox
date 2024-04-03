import { ReactNode } from "react";

import BlogFooter from "./blog-footer";
import CTA from "../../xlox-site/components/cta";
import BlogHeader from "./blog-header";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <BlogHeader />
      {children}
      <CTA />
      <BlogFooter />
    </div>
  );
}
