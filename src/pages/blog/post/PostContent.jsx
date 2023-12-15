import React from "react";

const PostContent = () => {
  return (
    <>
      <div className="w-full max-w-5xl aspect-[4/2] overflow-hidden rounded-2xl">
        <img
          id="poster"
          src="https://source.unsplash.com/1920x1080?nature"
          alt="poster"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="blogPostInfo" className="w-full h-fit flex flex-col gap-8">
        <h1 className="text-4xl font-bold font-playfair-display leading-[7vh] tracking-normal">
          This is for Post or article Title field with big font size as a
          Heading 1 and serif font-face
        </h1>
        <div className="flex items-center gap-4">
          <p className="text-xl font-medium">Category</p>
          <div className="w-10 h-1 border-b-2 border-black"></div>
          <p>16 December 2023</p>
        </div>
      </div>
      <div id="blogPostContent" className="flex flex-col gap-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quis omnis voluptas, facilis odit soluta necessitatibus laborum
          repudiandae dicta nesciunt voluptatum rem corporis! Voluptatibus
          blanditiis quod magni commodi, tempore pariatur iusto sequi laborum,
          illo vitae nostrum. Sint eligendi architecto, aperiam alias recusandae
          voluptatibus ad, aliquam eius facilis optio dolore quas?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nulla
          pariatur vel suscipit. Labore culpa sint neque vel officia impedit
          illum cupiditate quis nam reiciendis qui corrupti consequatur
          obcaecati minus voluptas sunt ipsa adipisci autem totam eos at,
          possimus eaque, deserunt cum? Temporibus repellendus, tenetur fugiat
          voluptas itaque, molestiae rem dignissimos laudantium distinctio eum
          sapiente cupiditate saepe. Animi molestiae ipsa architecto sint itaque
          ullam explicabo facere, officiis placeat officia quidem, dolor
          doloremque vitae laborum quod? Accusamus deserunt soluta ipsam a
          accusantium aperiam ex quidem, minus vel. Magni quae, ratione
          voluptatum sapiente itaque ipsum fugit, alias, at ex aspernatur
          suscipit officia.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
          minima! Veniam rerum laudantium dolores, maxime vitae excepturi unde
          recusandae reiciendis architecto laboriosam blanditiis voluptatum quae
          reprehenderit harum labore ut! Porro adipisci laudantium molestiae
          quisquam nesciunt mollitia deserunt modi quibusdam ex temporibus,
          maiores voluptate, culpa voluptates dignissimos magnam velit illum
          exercitationem architecto non sed. Nihil, cupiditate quasi non
          corporis ratione unde nostrum natus illum reiciendis enim nemo porro
          iusto esse vero autem recusandae fugiat modi! Magni pariatur harum,
          neque assumenda modi facere dolore vero accusantium, quibusdam
          doloribus, maxime eveniet quasi cum.
        </p>
        <p className="text-5xl font-playfair-display my-5 font-semibold">
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          soluta sequi eaque magni neque recusandae eum beatae maiores similique
          in?"
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          fugit incidunt doloremque quam natus. Incidunt eos quae ducimus
          dolorum nesciunt? Quisquam quibusdam ipsum labore consequuntur
          molestias quis ab inventore enim atque harum, rem esse consectetur
          earum libero suscipit reprehenderit! Sapiente similique aspernatur
          nihil. Laboriosam, unde quas? Alias veritatis est adipisci
          necessitatibus nemo! Reprehenderit assumenda tempora accusamus neque
          similique cum iusto unde id laudantium nisi incidunt dolores omnis
          quos temporibus ducimus, ullam voluptas consequatur dolor at? Corrupti
          non recusandae quae nihil quisquam reiciendis expedita dolorem dolorum
          molestiae quo mollitia pariatur delectus voluptas et eligendi repellat
          tenetur numquam aut qui quod, harum aspernatur enim? Minus repellendus
          blanditiis quod nesciunt id. Sed quo, at incidunt fugit illum esse
          odit architecto, eum voluptatem eveniet non dignissimos, porro ipsam
          dolores. Quo dolore deserunt minus, eius est ex provident magni nisi
          voluptas repellat excepturi aut recusandae. Iure velit at natus autem
          nobis consequuntur. Molestias, placeat iusto!
        </p>
      </div>
    </>
  );
};

export default PostContent;
