---
title: Home
description: "Jocelyn Lee is Live.Deep.Lee, an authentic source of deep living and
  loving. She documents and shares her self, purpose and service through Instagram
  and her YouTube channel. \n\nShe focuses on her passion topics: SPIRITUAL & METAPHYSICAL,
  CULTURE & PEOPLE, NATURE & COSMOS, HEALTH & HEALING, ART & PLAY"
image: "/uploads/Home-Page-Cropped.jpg"
bottom_image: "/uploads/Homepage-Quote-Pic.jpg"
include_in_nav: true
---

<section class="hero" style="background-image: url({% include relative-src.html src=page.image %})">
<div class="inner-hero text-container">
<div class="hero-text-container">
<div class="hero-logo">{% include jocelyn-lee-logo.svg %}</div>
<h1 id="landing-page-heading">Jocelyn Lee</h1>
<p class="subtext editable">An authentic source of deep living \+ loving. </p>
<div class="cta button alt editable" id="cta-my-journey"><a href="/my-journey/">My Journey</a></div>
</div>
</div>
<div class="read-on"><a href="#read-on">read on <span class="arrow">▼</span></a></div>
</section>

<div class="content" id="read-on">
<section>
<div class="text-container">
<ul class="blog-posts">
{% for post in site.posts limit:3 %}
{% include post.html %}
{% endfor %}
</ul>
</div>
</section>

    <section class="hero hero-footer" style="background-image: url({% include relative-src.html src=page.bottom_image %});background-position: top center;">
        <div class="inner-hero text-container">
            <div class="hero-text-container">
                <div class="quote editable"><p>"I share my self, purpose and service the only way I know how - being me on the brightest or days and darkest of nights."</p></div>
                <p class="subtext editable">- Jocelyn Lee</p>
            </div>
        </div>
        <div class="hero-overlay"></div>
    </section>
    
    <div class="separator">
        <img src="/images/separator.png" />
    </div>
    
    <div class="text-container">
        {% include footer-about.html %}
    </div>

</div>