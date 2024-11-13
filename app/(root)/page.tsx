import { signOut, auth } from "@auth";
import { Button } from "@components/ui/button";
import ROUTES from "@constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <h1 className="text-4xl font-bold text-purple-500">
        Hello World - inter
      </h1>
      <p className="font-space-grotesk text-4xl font-bold text-purple-500">
        Hello World - space grotesk
      </p>

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </div>
  );
};

export default Home;
