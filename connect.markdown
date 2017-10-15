---
title: Connect
description: "Jocelyn Lee is Live.Deep.Lee, an authentic source of deep living and
  loving. She documents and shares her self, purpose and service through Instagram
  and her YouTube channel. \n\nShe focuses on her passion topics: SPIRITUAL & METAPHYSICAL,
  CULTURE & PEOPLE, NATURE & COSMOS, HEALTH & HEALING, ART & PLAY\\\n\\\nConnect with
  me and let's create a beautiful world together."
image: "/uploads/Quote.jpg"
share_url: default
include_in_nav: true
---

<section class="hero" style="background-image: url({% include relative-src.html src=page.image %})">
<div class="inner-hero text-container">
<div class="hero-text-container">
<h1 class="editable">Connect</h1>
<p class="subtext editable">Let's collaborate!  <br />Share yourself with me! <br />Don't be shy, let's connect!</p>
</div>
</div>
<div class="read-on"><a href="#contact">connect with me <span class="arrow">▼</span></a></div>
</section>

<section class="pad" id="contact">
<div class="text-container contact-box">
<form action="https://formspree.io/jocelyn@jocelynlee.ca" method="POST" class="contact-form">
<input type="text" name="_gotcha" style="display:none" />
<input type="hidden" name="_next" value="{{ site.prod_url }}/contact-success/" />

            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="I'm Jocelyn, who are you?" tabindex="1" />
    
            <label for="email">Email Address</label>
            <input type="email" name="email" id="email" placeholder="What's your email?" tabindex="2" required />
    
            <label for="message">Message</label>
            <textarea name="message" id="message" placeholder="What can I do for you?" tabindex="3"></textarea>
    
            <input type="submit" value="Send Message" tabindex="4" />
        </form>
    
        <div class="contact-details">
            <ul class="contact-details-social">
                {% for link in site.data.footer.right_links %}
                    <a {% if link.new_window %}target="_blank"{% endif %} href="{% include relative-src.html src=link.link %}" {% if link.social_icon %}class="{{ link.social_icon | slugify }}-icon"{% endif %}>
                        {% if link.social_icon %}{% include social-icon.html icon=link.social_icon %}{% endif %}
                        {{ link.name }}
                    </a>
                {% endfor %}
            </ul>
        </div>
    </div>

</section>