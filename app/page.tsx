export default function Home() {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between">
        {/* Header / Navbar */}
        <header className="border-b border-neutral-800 px-6 py-4 flex justify-between items-center max-w-6xl mx-auto w-full">
          <h1 className="text-xl font-bold tracking-wider text-amber-500">
            DETAIL<span className="text-white">PRO</span>
          </h1>
          <a
            href="#book"
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-4 py-2 rounded-lg transition"
          >
            Book Service
          </a>
        </header>
  
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center px-6 py-20 flex-1 flex flex-col justify-center items-center">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full mb-4">
            Mobile Auto Detailing
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Showroom Quality Shine <br />
            <span className="text-amber-500">Right In Your Driveway</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mb-8">
            Professional interior and exterior mobile detailing customized for your vehicle. We bring premium care and equipment straight to you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#book"
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-3 rounded-lg text-lg transition text-center"
            >
              Schedule Booking
            </a>
            <a
              href="#services"
              className="border border-neutral-700 hover:bg-neutral-900 text-white font-semibold px-8 py-3 rounded-lg text-lg transition text-center"
            >
              View Services
            </a>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="border-t border-neutral-800 text-center py-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} DetailPro Mobile Detailing. All rights reserved.
        </footer>
      </main>
    );
  }
  