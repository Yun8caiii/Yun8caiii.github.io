import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { myProjects, clientProjects } from "@/data/projectsData";
import Link from "next/link";

function FeaturedProjects() {
  return (
    <div id="projects" className="flex justify-center mb-16 mt-32 ">
      <Tabs defaultValue="MyWork" className="max-w-4xl w-full">
        <TabsList className="flex justify-center space-x-4 w-1/2 mx-auto">
          <TabsTrigger value="MyWork" className="mx-2">
            My Works
          </TabsTrigger>
          <TabsTrigger value="ClientWork" className="mx-2">
            Client Works
          </TabsTrigger>
        </TabsList>
        <TabsContent value="MyWork">
          <h1 className="text-center mb-4 font-bold mt-4">
            Some of my cool projects I doos
          </h1>
          <div className="flex justify-center mb-6">
            <span className="text-center text-gray-500 text-sm">
              I&apos;ve worked on a variety of cool shits, from simple websites
              to full stack applications to hardware development. Here are a few
              of my favorites. You can find more on my project page.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {myProjects.map((project, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{project.content}</p>
                </CardContent>
                <CardFooter>
                  {project.footerLink && (
                    <Link
                      href={project.footerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-blue-500 hover:underline"
                    >
                      {project.footer}
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ClientWork">
          <h1 className="text-center mb-4 font-bold">Work I do for client</h1>
          <div className="flex justify-center mb-4">
            <span className="text-center text-gray-500 text-sm">
              I&apos;ve worked on a variety of cool shits, from simple websites to
              full stack applications to hardware development. Here are a few of
              my favorites. You can find more on my project page.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clientProjects.map((project, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{project.content}</p>
                </CardContent>
                <CardFooter>
                  {project.footerLink && (
                    <Link
                      href={project.footerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-blue-500 hover:underline"
                    >
                      {project.footer}
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default FeaturedProjects;
