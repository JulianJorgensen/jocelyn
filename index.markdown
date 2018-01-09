---
title: Live Deep Lee
description: Jocelyn Lee is Live.Deep.Lee, an authentic source of deep living, loving,
  relating and being. She is a speaker, facilitator and YouTuber. She documents and
  share her spiritual life journey and provides a deeper perspective on life through
  her vlogs and videos.
image: "/uploads/Home-Page-Cropped.jpg"
bottom_image: "/uploads/Homepage-Quote-Pic.jpg"
video: xuVuRie9qF4
include_in_nav: true
---

<section class="hero" style="background-image: url({% include relative-src.html src=page.image %})">
<div class="inner-hero text-container">
<div id="hero-home" class="hero-text-container">
<div class="hero-logo">{% include jocelyn-lee-logo.svg %}</div>
<div class="hero-text">
<h1 id="landing-page-heading">Jocelyn Lee</h1>
<p class="subtext editable">Deep living, loving, relating & being. 
Guiding by example, sharing tantric connections. </p>
</div>
</div>
</div>
<div class="read-on"><a href="#read-on">read on <span class="arrow">▼</span></a></div>
</section>

<div class="content" id="read-on">
<div id="video"><iframe width="750" height="422" src="https://www.youtube.com/embed/{{page.video}}" frameborder="0" allowfullscreen></iframe></div>
<section>
<div class="text-container">
<ul class="blog-posts">
{% for post in site.posts limit:3 %}
{% include post.html %}
{% endfor %}
</ul>
</div>
</section>

<section id="see-more-posts">
<div class="cta button"><a href="/blog">See more posts</a></div>
</section>

    <section class="hero hero-footer" style="background-image: url({% include relative-src.html src=page.bottom_image %});background-position: top center;">
        <div class="inner-hero text-container">
            <div class="hero-text-container">
                <div class="quote editable"><p>"I only know how to live a deep and authentic life of love. And that is all I have to share."</p></div>
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
