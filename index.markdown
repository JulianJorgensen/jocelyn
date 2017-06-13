---
title: Home
description: |-
  Jocelyn shares her life through lived wisdom, higher perspectives, raw expression and creativity. All authentically documented through her blogs, vlogs, videos, poetry and YouTube series, Shakti Diaries.

  She is a Reiki Master, Crystal Healing Practitioner, Mystic,  Yin Yoga Teacher, Intuitive Masseuse, Soul Connection Expert, Writer, Speaker, Artist and Host.

  Originally from Vancouver, BC. Jocelyn is now residing in Ubud, Bali.
image: "/uploads/Home-Page-Cropped.jpg"
bottom_image: "/uploads/Homepage-Quote-Pic.jpg"
include_in_nav: true
---

<section class="hero" style="background-image: url({% include relative-src.html src=page.image %})">
<div class="inner-hero text-container">
<div class="hero-text-container">
<div class="hero-logo">{% include jocelyn-lee-logo.svg %}</div>
<h1 id="landing-page-heading">Jocelyn Lee</h1>
<p class="subtext editable">I am an ocean of a woman, I cannot be contained. </p>
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
                <div class="quote editable"><p>"You are free to be who you are, no approval needed. No apologies necessary."</p></div>
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