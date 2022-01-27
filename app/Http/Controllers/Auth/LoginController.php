<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $result = false;

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (Auth::attempt($credentials)) {
            $reult = true;
            $user = \Auth::user();
            // トークン破棄
            $user->tokens()->where('name', 'userauth')->delete();
            // トークン作成
            $user->token = $user->createToken('userauth')->plainTextToken;

            return response()->json(['user'=>$user]);
        }

        return response()->json(['message' => 'User not found'], 422);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged out'], 200);
    }
}
