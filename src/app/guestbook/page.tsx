// Remove "use client" since we're using server-side authentication
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Form } from "../components/Form";

export default async function GuestbookPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Guestbook</h1>
      <p className="leading-7 text-muted-foreground mt-2">Sign my Guestbook!</p>

      <Card className="mt-10">
        <CardHeader className="flex flex-col w-full">
          <Label className="mb-1">Message</Label>
          {user ? (
            <Form />
          ) : (
            <div className="flex justify-between gap-4 flex-col md:flex-row">
              <Input type="text" placeholder="Your Message..." />
              <RegisterLink>
                <Button className="w-full">Sign for free</Button>
              </RegisterLink>
            </div>
          )}
        </CardHeader>
      </Card>
    </section>
  );
}
