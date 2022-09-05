<?php
/**
 * Plugin Name:       Advanced Image Block
 * Description:       An image upload, title text and a setting for the title: level (from h1 to h6) and text colour.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            moroz-art-dev
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       advanced-image-block
 *
 * @package           advanced-image-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function advanced_image_block_advanced_image_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'advanced_image_block_advanced_image_block_block_init' );
