<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'designvista_developerturnover' );

/** Database username */
define( 'DB_USER', 'designvista_userx_vist199' );

/** Database password */
define( 'DB_PASSWORD', ',iH*Pf+92X@qZlp_' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'W?IklbK`%;PFk5d=cU=G-$Imy])(:6VrK&|D+O3!ULR5zkXx$Pwzt:`)Ti%^aar[' );
define( 'SECURE_AUTH_KEY',  'd,[+j/Y_d`&l( {8jT+6gG?ki?+|GxV4NHI!63X-+1.&&ZW;oSM6lZUhLf9^#!q%' );
define( 'LOGGED_IN_KEY',    '<;.8`*ze4pZ!MM{P$1H``rP/#wKbAx@_W.LK%{W_O_/[%o]H9EOKyrDM^#qoluKz' );
define( 'NONCE_KEY',        '2S7q.n+VPj7-Z^@lC,j Km-WZg5 Gu=pZj6_y,mFw<X<f^y5j+yDFb+B(t|X7PVz' );
define( 'AUTH_SALT',        'Y)Stk$J_22h64[~jE%gZ8Vt%4odhY(M|f{_ejz`mq1o}whqS-~,|4Z.dzSY05Oe^' );
define( 'SECURE_AUTH_SALT', 'G;.vi-nn&s:eax)qnmR*jgv/OZQF@F%=b[ty|I?@LdgTSDBoYXQ^HgtdAUT(__4<' );
define( 'LOGGED_IN_SALT',   'vHS9A6s<p-XhZph[*rlWO#2yh_I.S/.K/~W*.@#g3Fk}DVZ|/527d %UT/TwXV,f' );
define( 'NONCE_SALT',       'a ,;>=GRe~V2Y%DT/k}0k$rO49:+34pLJ]XM<^JwJ}}1WQ,,Kqm(sOQkd$>!p[~?' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'vista__';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
define('DISABLE_WP_CRON', true);
define( 'WP_MEMORY_LIMIT', '512M' );


/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
