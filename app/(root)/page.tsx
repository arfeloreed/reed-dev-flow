import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className="relative flex">
      <main className="relative flex-1 pt-28">
        <h1 className="text-4xl font-bold text-purple-500">
          Hello World - inter
        </h1>
        <p className="font-space-grotesk text-4xl font-bold text-purple-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          accusantium mollitia natus voluptatibus ducimus dolorem consequatur
          incidunt dolore assumenda ab, adipisci accusamus animi iure obcaecati
          eaque veritatis inventore ratione deserunt! Unde tenetur corporis
          provident aut magni. Voluptates praesentium dicta rem veritatis quasi
          velit, atque, laudantium error quae dolores amet aperiam quod nihil
          debitis earum nulla cum! Aperiam commodi assumenda ab! Ea soluta est
          minima quidem repellat, nulla laborum necessitatibus sapiente tenetur
          dolore alias a incidunt assumenda, illum odio porro possimus optio ex
          delectus quasi ut explicabo. Quos corporis eos dolores?
        </p>
        <p className="font-space-grotesk text-4xl font-bold text-purple-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          accusantium mollitia natus voluptatibus ducimus dolorem consequatur
          incidunt dolore assumenda ab, adipisci accusamus animi iure obcaecati
          eaque veritatis inventore ratione deserunt! Unde tenetur corporis
          provident aut magni. Voluptates praesentium dicta rem veritatis quasi
          velit, atque, laudantium error quae dolores amet aperiam quod nihil
          debitis earum nulla cum! Aperiam commodi assumenda ab! Ea soluta est
          minima quidem repellat, nulla laborum necessitatibus sapiente tenetur
          dolore alias a incidunt assumenda, illum odio porro possimus optio ex
          delectus quasi ut explicabo. Quos corporis eos dolores?
        </p>
        <p className="font-space-grotesk text-4xl font-bold text-purple-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          accusantium mollitia natus voluptatibus ducimus dolorem consequatur
          incidunt dolore assumenda ab, adipisci accusamus animi iure obcaecati
          eaque veritatis inventore ratione deserunt! Unde tenetur corporis
          provident aut magni. Voluptates praesentium dicta rem veritatis quasi
          velit, atque, laudantium error quae dolores amet aperiam quod nihil
          debitis earum nulla cum! Aperiam commodi assumenda ab! Ea soluta est
          minima quidem repellat, nulla laborum necessitatibus sapiente tenetur
          dolore alias a incidunt assumenda, illum odio porro possimus optio ex
          delectus quasi ut explicabo. Quos corporis eos dolores?
        </p>
        <p className="font-space-grotesk text-4xl font-bold text-purple-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          accusantium mollitia natus voluptatibus ducimus dolorem consequatur
          incidunt dolore assumenda ab, adipisci accusamus animi iure obcaecati
          eaque veritatis inventore ratione deserunt! Unde tenetur corporis
          provident aut magni. Voluptates praesentium dicta rem veritatis quasi
          velit, atque, laudantium error quae dolores amet aperiam quod nihil
          debitis earum nulla cum! Aperiam commodi assumenda ab! Ea soluta est
          minima quidem repellat, nulla laborum necessitatibus sapiente tenetur
          dolore alias a incidunt assumenda, illum odio porro possimus optio ex
          delectus quasi ut explicabo. Quos corporis eos dolores?
        </p>
      </main>
    </div>
  );
};

export default Home;
