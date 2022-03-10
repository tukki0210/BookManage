<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class RakutenAPIController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $keyword = 'javascript';
        $applicationID = '1084411909272873219';
        $url = 'https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404';
        
        $response = Http::get($url,[
            'format' => 'json',
            'keyword' => $keyword,
            'booksGenreId' => '000',
            'applicationId' => $applicationID
        ]);
        return $response->json();
    }
}
