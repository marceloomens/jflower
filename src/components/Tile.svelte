<script>
  export let anchor, image, alt;
</script>

<style>
article {
  margin: 0;
  position: relative;
}
article > a:hover {
  cursor: pointer;
}
article picture > img {
  max-width: 100%;
  width: 100%;
}

aside {
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  display: none;
  flex-direction: column;
  justify-content: end;
  left: 0;
  padding: 10px;
  position: fixed;
  right: 0;
  top: 25vh;
  z-index: 1;
}
aside:target {
  display: flex;
}
@media (min-width: 478px) {
  aside {
    position: absolute;
    top: 0;
  }
}
aside a.target-dismiss {
  color: white;
  display: block;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;
}
</style>

<article>
<a href="#{anchor}">
  <picture>
    <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25" type="image/webp" media="(min-width: 1600px)">
    <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=1280&fit=crop" type="image/webp" media="(min-width: 1280px)">
    <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=768&fit=crop" type="image/webp" media="(min-width: 768px)">
    <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=568&fit=crop" type="image/webp" media="(min-width: 568px)">
    <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=320&fit=crop" type="image/webp">
    <img src="//j-flower-cake.imgix.net/{image}?auto=format&q=25&w=1280&fit=crop" sizes="35vw" alt="{alt}">
  </picture>
</a>
<aside id="{anchor}" class="caption">
  <a href="#/" class="target-dismiss">Close</a>
  <h2 class="font-display">A delicious J Flower Cake 1</h2>
  <p>Made from fresh ingredients and original western and Asian flower cake recipes and designs.</p>
</aside>
</article>
