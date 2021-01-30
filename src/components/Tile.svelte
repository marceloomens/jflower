<script>
  export let anchor, image, alt;
</script>

<div class="tile">
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
<div id="{anchor}" class="caption">
  <a href="#/" class="target-dismiss">Close</a>
  <h2 class="font-secondary">A delicious J Flower Cake 1</h2>
  <p>Made from fresh ingredients and original western and Asian flower cake recipes and designs.</p>
</div>
</div>
