
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-blue-500 dark:bg-blue-700">
        <Link className="flex items-center justify-center" href="#" to="/">
          <PlaneIcon className="h-6 w-6" />
          <span className="sr-only">XYZ Airlines</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#" to="#">
            Flights
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#" to="#">
            Destinations
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#" to="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#" to="#">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#" to="#">
            Contact
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#" to="#">
            Login
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#" to="#">
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Discover the World with XYZ Airlines
                </h1>
                <img
                  alt="Airplane"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Search for Flights</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Enter your departure and destination airports, travel dates, and the number of passengers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Input placeholder="Departure Airport" type="text" />
                <Input placeholder="Destination Airport" type="text" />
                <Input placeholder="Travel Dates" type="date" />
                <Input placeholder="Number of Passengers" type="number" />
                <Button type="submit">Search</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Destinations</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore some of the most popular destinations that our customers love.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8 lg:gap-12 [&>img]:mx-auto">
              <div>
                <img
                  alt="Destination 1"
                  className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                  height="140"
                  src="/placeholder.svg"
                  width="140"
                />
                <p className="text-center mt-2">Destination 1</p>
              </div>
              <div>
                <img
                  alt="Destination 2"
                  className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                  height="140"
                  src="/placeholder.svg"
                  width="140"
                />
                <p className="text-center mt-2">Destination 2</p>
              </div>
              <div>
                <img
                  alt="Destination 3"
                  className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                  height="140"
                  src="/placeholder.svg"
                  width="140"
                />
                <p className="text-center mt-2">Destination 3</p>
              </div>
              <div>
                <img
                  alt="Destination 4"
                  className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                  height="140"
                  src="/placeholder.svg"
                  width="140"
                />
                <p className="text-center mt-2">Destination 4</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services and Amenities</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We offer a range of services and amenities to make your journey more comfortable.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Card>
                  <CardHeader>
                    <CardTitle>Comfortable Seating</CardTitle>
                  </CardHeader>
                  <CardContent>Enjoy spacious seating with plenty of legroom.</CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>In-Flight Entertainment</CardTitle>
                  </CardHeader>
                  <CardContent>Stay entertained with our selection of movies, TV shows, and music.</CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Complimentary Meals</CardTitle>
                  </CardHeader>
                  <CardContent>Enjoy a variety of meal options on long-haul flights.</CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-blue-500 dark:bg-blue-700 text-white py-8 px-4 lg:px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">About Us</h3>
            <p className="text-sm">
              XYZ Airlines is a leading airline offering flights to over 100 destinations worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <p className="text-sm">1234 Airline Drive, City, State, 12345</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@xyzairlines.com</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link className="hover:underline" href="#" to="#">
                  Flights
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#" to="#">
                  Destinations
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#" to="#">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#" to="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#" to="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Follow Us</h3>
            <div className="flex space-x-3">
              <Link href="#" to="#">
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link href="#" to="#">
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link href="#" to="#">
                <InstagramIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>© XYZ Airlines. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function PlaneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
