export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return <main className="prose prose-lg max-w-3xl p-8">{children}</main>;
}
