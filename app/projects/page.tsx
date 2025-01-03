import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function projects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-6">
      <Card className="">
        <CardHeader>
          <CardTitle className="">TasteMates</CardTitle>
          <CardContent>NextJS ConvexDB Node</CardContent>
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
        <CardFooter className="flex justify-between">Hello</CardFooter>
      </Card>
      <Card className="">
        <CardHeader>
          <CardTitle>Forecastly</CardTitle>
          <CardContent>React Native Expo JSX</CardContent>
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
        <CardFooter className="flex justify-between">Hello</CardFooter>
      </Card>
      <Card className="">
        <CardHeader>
          <CardTitle>Fooder</CardTitle>
          <CardContent>JS HTML5 CSS3</CardContent>
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
        <CardFooter className="flex justify-between">Hello</CardFooter>
      </Card>
      <Card className="">
        <CardHeader>
          <CardTitle>AI Local Business Directory App</CardTitle>
          <CardContent>NextJS MongoDB Clerk Tailwind</CardContent>
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
        <CardFooter className="flex justify-between">Hello</CardFooter>
      </Card>
    </div>
  );
}
