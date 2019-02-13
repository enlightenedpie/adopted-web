<footer class="adpt-footer">
	<div class="adpt-footer-block">
		<div class="adpt-footer-heading">
			<img class="constrained" src="<?php header_image(); ?>" alt="<?php echo bloginfo('name'); ?>" />
		</div>
		<div class="adpt-footer-info">
			<span class="footer-info-inner">
				<?php echo get_theme_mod('footer_block_1_email'); ?>
			</span>
			<span class="footer-info-inner">
				<?php echo get_theme_mod('footer_block_1_phone'); ?>
			</span>
			<span class="footer-info-inner">
				<?php echo get_theme_mod('footer_block_1_address'); ?>
			</span>
		</div>
	</div>
	<div class="adpt-footer-block"></div>
	<div class="adpt-footer-block"></div>
	<div class="adpt-footer-block"></div>
</footer>
<?php wp_footer(); ?>
</body>
</html>