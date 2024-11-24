export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">My Blog</div>
        </header>
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2024 My Blog
        </footer>
      </div>
    );
  }
  