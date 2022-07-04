<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocsController;

if (! defined('DEFAULT_VERSION')) {
    define('DEFAULT_VERSION', 'main');
}



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [DocsController::class , 'showRootPage'])->name('homepage');

Route::get('docs', [DocsController::class , 'showRootPage']);
Route::get('docs/{version}/{page?}', [DocsController::class ,'show'])->name('docs.version');
