---
title: Blog
description: Jocelyn Lee blogs about her intimate life journey through spirituality,
  sexuality and artistry.
image: "/uploads/Blog-Marquee.jpg"
---

<section class="hero" style="background-image: url({% include relative-src.html src=page.image %})">
<div class="inner-hero text-container">
<div class="hero-text-container">
<h1 class="editable">Blog</h1>
<p class="subtext editable">An intimate journey into a woman's body, mind, heart & spirit</p>
</div>
</div>
<div class="read-on"><a href="#read-on">read on <span class="arrow">▼</span></a></div>
</section>

<section id="read-on">
<div class="text-container">
<p class="editor-link"><a href="cloudcannon:collections/_posts" class="btn"><strong>✎</strong> Add Post</a></p>
<ul class="blog-posts">
{% for post in paginator.posts %}
{% include post.html %}
{% endfor %}
</ul>

        {% if paginator.total_pages > 1 %}
            <div class="pagination">
                <div class="button newer-posts {% if paginator.previous_page %}visible{% endif %}">
                    <a href="{{ site.baseurl }}{{ paginator.previous_page_path }}">&larr; Newer posts</a>
                </div>
    
                <span class="page_number">Page <strong>{{ paginator.page }}</strong> of <strong>{{ paginator.total_pages }}</strong></span>
    
                <div class="button older-posts {% if paginator.next_page %}visible{% endif %}">
                    <a href="{{ site.baseurl }}{{ paginator.next_page_path }}">Older posts &rarr;</a>
                </div>
    
                <div class="clear"></div>
            </div>
        {% endif %}
    </div>

</section>