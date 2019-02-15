<?php

/* Template Name: Front Page */

global $post;

add_filter( 'body_class', function($classes) {
	return ['adpt-front-page'];
});
 
get_header();

//$blocks = parse_blocks($post->post_content);
?>
<section class="adpt-stage">
	<div class="adpt-stage-inner">
		<?php echo $post->post_content; ?>
	</div>
</section>
<?php
get_footer();