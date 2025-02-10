export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; {new Date().getFullYear()} Dinner and a Movie. All rights reserved.</p>
    </footer>
  );
}