<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\User;


class AuthController extends Controller
{
    //
    // public function __construct(){
    //     $this->middleware('auth:api',['except'=>['login']]);
    // }

    // register a new user
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'email'=>'required|email|unique:users',
             'password' => 'required|min:3|confirmed',
              ]);
           if($validator->fails()){
               return response()->json([
                'status'=>'error',
                'errors'=> $validator->errors()
               ],422);
           }

            $user = new User;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);
            $user->save();

            return response()->json(['status'=> 'success'], 200);
    }
    // Get a JWT via a credentials
    public function login(Request $request){
        $credentials = $request->only('email','password');

        if($token = $this->guard()->attempt($credentials)){
         return response()->json(['status'=>'success','token'=>$token],200)->header('Autherization',$token);
        }

        return response()->json(['error'=>'login_error'],401);
    }

    //Get authenticated User

    public function getUser(){
        $user = User::find(Auth::user()->id);
        return response()->json([
         'status'=> 'success',
         'data' => $user
        ]);
    }

    //log  out current user

    public function logout(){
        auth()->logout();
        return response()->json(['message'=>'User loggout successfuly']);
    }

    // refresh a token

    public function refresh(){
        if($token= $this->guard()->refresh()){
            return response()
                      ->json(['status'=>'success'], 200)
                      ->header('Authorization', $token);
        }

        return responser()->json(['error'=>'refresh_token_error'],401);
    }

    //token array structure

    public function guard(){
        return Auth::guard();
    }
    // public function respondWithToken($token){
    //     return response()->json([
    //     'access_token'=> $token,
    //      'token_type' => 'bearer',
    //      'expires_in' => auth()->factory()->getTTL() * 60
    //     ]);
    // }
}
