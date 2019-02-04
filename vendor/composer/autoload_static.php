<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitc34eff4083e8dd01e8eacd977511ea5b
{
    public static $files = array (
        '320cde22f66dd4f5d3fd621d3e88b98f' => __DIR__ . '/..' . '/symfony/polyfill-ctype/bootstrap.php',
        '841f98c5d948ce534a6f87abe5b50614' => __DIR__ . '/..' . '/roots/wp-password-bcrypt/wp-password-bcrypt.php',
    );

    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Symfony\\Polyfill\\Ctype\\' => 23,
        ),
        'R' => 
        array (
            'Roots\\WPConfig\\' => 15,
            'Roots\\Composer\\' => 15,
        ),
        'G' => 
        array (
            'Gladney\\' => 8,
        ),
        'D' => 
        array (
            'Dotenv\\' => 7,
        ),
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Symfony\\Polyfill\\Ctype\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-ctype',
        ),
        'Roots\\WPConfig\\' => 
        array (
            0 => __DIR__ . '/..' . '/roots/wp-config/src',
        ),
        'Roots\\Composer\\' => 
        array (
            0 => __DIR__ . '/..' . '/roots/wordpress-core-installer/src',
        ),
        'Gladney\\' => 
        array (
            0 => __DIR__ . '/../..' . '/web/app/plugins/gcfa-wp-plugin/src',
        ),
        'Dotenv\\' => 
        array (
            0 => __DIR__ . '/..' . '/vlucas/phpdotenv/src',
        ),
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static $prefixesPsr0 = array (
        'E' => 
        array (
            'Env' => 
            array (
                0 => __DIR__ . '/..' . '/oscarotero/env/src',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitc34eff4083e8dd01e8eacd977511ea5b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitc34eff4083e8dd01e8eacd977511ea5b::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInitc34eff4083e8dd01e8eacd977511ea5b::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
