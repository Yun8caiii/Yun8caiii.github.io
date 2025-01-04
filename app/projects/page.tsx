import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-6">
      <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle>AI Local Business Directory App</CardTitle>
          <CardContent>NextJS | MongoDB | Clerk | Tailwind</CardContent>
          <CardDescription>
          a dynamic platform designed to connect users with local businesses
            effortlessly. By leveraging advanced AI-powered features, the app
            provides personalized recommendations based on user preferences and
            location. Users can explore a wide range of nearby businesses, view
            essential details like ratings and contact information, and discover
            new local gems. With a sleek and intuitive interface, the app
            simplifies the process of finding and supporting local businesses,
            creating a seamless experience for users and enhancing community
            engagement.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <a
            href="https://github.com/Yun8caiii/AI-business-finder-directory"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href="https://your-live-website-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Website
          </a>
        </CardFooter>
      </Card>

      <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle>TasteMates</CardTitle>
          <CardContent>Typescript | NextJS | ConvexDB | Node</CardContent>
          <CardDescription>
          The dating application is a unique platform that connects people
            through their shared love of food. It helps users discover potential
            matches based on their favorite cuisines, dining preferences, and
            local spots, making connections feel meaningful and enjoyable. By
            focusing on culinary interests, the app provides a fun and engaging
            way for people to bond over something they’re passionate about—food.
            Whether you’re a fan of pizza nights or fine dining, this app is
            designed to bring food lovers together.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <a
            href="https://github.com/nhanng19/hackathon-convex"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href="https://fooder-convex.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Website
          </a>
        </CardFooter>
      </Card>

      <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle>Forecastly</CardTitle>
          <CardContent>Javascript | ReactNative | Expo | JSX</CardContent>
          <CardDescription>
          I developed a user-friendly weather monitor application for both iOS
            and Android platforms, offering a seamless and intuitive experience
            for users. The app provides real-time weather updates and
            location-based insights, ensuring users have access to accurate and
            up-to-date information. By focusing on performance and usability,
            the app delivers dynamic features tailored to help users stay
            informed and prepared, no matter where they are.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <a
            href="https://github.com/your-github-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href="https://your-live-website-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Website
          </a>
        </CardFooter>
      </Card>

      <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle>Fooder</CardTitle>
          <CardContent>JS | HTML5 | CSS3</CardContent>
          <CardDescription>
          Fooder is a food discovery service designed to connect users with
            the closest restaurants based on their location. As the front-end
            lead, I crafted an intuitive user interface and ensured the design
            provided a seamless and enjoyable experience for users. By
            coordinating the integration of back-end services, the platform
            delivers accurate and personalized dining options, helping users
            find their next meal effortlessly.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <a
            href="https://github.com/nhanng19/Fooder"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href="https://nhanng19.github.io/Fooder/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Website
          </a>
        </CardFooter>
      </Card>

      <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle>Six-axis Glove Controlled Robotic Arm</CardTitle>
          <CardContent>Arduino | RaspberryPi | Python | C++ | TactigonOne</CardContent>
          <CardDescription>
          Engineered a wirelessly controlled robotic arm using a customized
            glove interface, leveraging Tactigon One to transmit precise
            coordinates and orientation via Bluetooth Low Energy technology.
            Developed a robust framework for accurate motor activation and
            seamless communication between microcontrollers and the robotic arm.
            Led regular team discussions to assess project progress and
            collaboratively build the robotic arm, demonstrating strong
            problem-solving skills by systematically identifying and resolving
            technical challenges with effective solutions.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <a
            href="https://github.com/your-github-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href="https://your-live-website-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Website
          </a>
        </CardFooter>
      </Card>

      <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle>IOT Smart Vent</CardTitle>
          <CardContent>Arduino | Xcode | Swift | C++</CardContent>
          <CardDescription>
          Developed an IoT-enabled smart vent system with seamless remote
            management through an advanced smart application built in Xcode.
            Programmed automated serial communication between the ESP8266 and a
            microcontroller for robust and efficient data exchange. Designed and
            3D-printed a comprehensive vent system, integrating allergen
            monitoring and advanced functionalities to enhance environmental
            quality and user experience.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <a
            href="https://github.com/your-github-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href="https://your-live-website-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Website
          </a>
        </CardFooter>
      </Card>

      <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle>Traffic Light Controller</CardTitle>
          <CardContent>Nexys A7-100T | VHDL </CardContent>
          <CardDescription>
          Developed a traffic light controller using the Nexys A7-100T FPGA
            and VHDL, implementing a finite state machine for real-time
            synchronization and designing interconnected data structures.
            Diagnosed and resolved complex issues affecting functionality and
            performance in the real-time system. Successfully synthesized and
            deployed the design onto FPGA hardware, conducting rigorous testing
            to simulate real-world traffic scenarios and ensure optimal
            performance.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <a
            href="https://github.com/your-github-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href="https://your-live-website-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Website
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
