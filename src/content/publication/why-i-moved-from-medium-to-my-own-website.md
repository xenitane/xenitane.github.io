---
isDraft: false
metaContent:
    {
        title: "Why I moved from medium to my own website?",
        description: "My journey from medium to my own website for writing articles alongside my public portfolio and the reasons why I did so.",
        heroImage: [true, "/index/pub/journey-from-medium-to-my-website.png"],
        keywords: ["article writing", "website", "astro", "branding", "content", "publishing"],
    }
createdAt: "05 Aug 2024"
---

## My First Sail In The Sea

Hi everyone. So where shall I start.

I guess I'll start this from the point when i decided that I'll publish my thoughts out there in the world.

And as everyone, I started writing on medium in December 2023. The first article that I wrote about was the one about the physics problem I posted earlier, **[see here](/publication/electric-flux-through-r-2fa32816)**.

Even writing that article was a pain as i wanted to write math formula but&hellip; you guessed it, _Medium_ has no support for `TeX`.

I somehow pulled it off using pre-rerendered images of the `TeX` expressions.

But that's the extent of medium, text blocks, images/videos, embeds, code blocks. You can't customize them and add interactive segments.

This pushed me in the direction of building my own website for publishing blogs, though there will be no place for feedback from the readers directly.

## The Kind Of Ship I Was Looking For

For long I was torn in the process of finding the right framework to build my website. I had the following requirements that I wanted that framework to fulfill:

- **Reusability**: I am able to write reusable components, i.e. page header and footer.
- **Static Site Generation**: I don't want any client side rendering, this website's content driven.
- **Composability**: I want to be able to add interactive elements in the blogs when necessary, i.e. demos.
- **Easy SEO**: I want to add full support for SEO without much hassle.

This Narrowed my options by a lot. And so, I put this task of mine on hold and devoted myself to some other projects of mine in the meantime.

I have used a few things in the past on front-end development work. Vanilla JS, jQuery, React and things in their ecosystem.

But I wanted something that'll just produce plain HTML with minimal to no JS to ship to the browser for CSR.

## I Asked For A Ship And Got A Rocket-Ship

Recently I tried **[Astro](https://astro.build)**, cause why not. It was also on my back-burner.

Astro is a meta-framework in the javascript ecosystem. It has a defined structure for everything, components, content, layouts, routing etc, and it generates plain HTML as the build output.

It gave me almost everything I needed out of the box. And for the things that are not not present, I can add them using plugins in the ecosystem or write them myself.

Sounds too good to be true? But it is. If I knew about it's capabilities, I would've used it earlier.

## Getting The Ship On The Launchpad

Now I got to work, I wanted a simple design for the website that looked minimal and technical.

So I went to **[v0](https://v0.dev)**, Vercel's LLM that can generate a basic design from a prompt, you'll still need to tweak it as per your needs.

Now with a basic design in hand and a few tries with the layout, I had things ready. Then I went ahead and add the necessary content and set the design for those pages too.

Finally I still wanted some interactivity on the page for sidebars and theme switching and I choose **[AlpineJS](https://alpinejs.dev)** for that. Check out alpine.js, you'll understand why.

And if later in the future, I need some other library like react, vue or solid, it's easy to integrate it, the documentation for that is present on astro's website.

## Plans For The Voyage

As I'm drifting, I plan to work learn and build new things. And as I do, I'll keep writing about my journey here.

Till then, I'll be floating around.
