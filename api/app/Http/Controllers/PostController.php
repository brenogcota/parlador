<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Post;
use App\Exceptions\Handler;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Database\QueryException;
use Symfony\Component\Debug\Exception\FatalErrorException;


class PostController extends Controller
{

    private $User;
    private $Post;

    public function __construct(User $user, Post $post)
    {
        $this->User = $user;
        $this->Post = $post;
    }

    public function index(Request $request) 
    {
        try {

            $posts = $this->Post->orderBy('updated_at', 'DESC')->get();

            if(!$posts) {
                return response()->json(['message' => 'No posts found' ], 404);
            }


            return response()->json(['posts' => $posts], 200);  

        }
        catch(Throwable $e) {
            return response()->json(['message' => 'Server error' ], 500);
        }
        catch (FatalErrorException $e) {
            return response()->json(['message' => 'Server error' ], 500);
        }
    }

    public function store(Request $request)
    {
        
        try 
        {

            $token = $request->header('Authorization');

            if(!$token) {
                return response()->json(['message' => 'Invalid token' ], 404); 
            }

            $user = $this->User->where('api_token', $token)->first();
            $post = $this->Post;

            $post->description = $request->input('description');
            $post->user_id = $user->id;
           
            if($post->save()) {
                
                return response()->json(['message' => 'Post created'], 201);  
            } 

        } 
        catch(Throwable $e) {
            return response()->json(['message' => 'Server error' ], 500);
        }
        catch (FatalErrorException $e) {
            return response()->json(['message' => 'Server error' ], 500);
        }
    }

    public function show(Request $request, $id) 
    {
        try {

            $post = $this->Post->find($id);

            if(!$post) {
                return response()->json(['message' => 'No post found' ], 404);
            }


            return response()->json(['post' => $post], 200);  

        }
        catch(Throwable $e) {
            return response()->json(['message' => 'Server error' ], 500);
        }
        catch (FatalErrorException $e) {
            return response()->json(['message' => 'Server error' ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try 
        {

            $post = $this->Post->find($id);

            if(!$post) {
                return response()->json(['message' => 'Post not found'], 404);  
            }
           
            $post->description = $request->input('description');
            
            if($post->save()) {
                return response()->json(['message' => 'Post updated'], 201);  
            } 
                        
        } catch(Throwable $e) {
            return response()->json(['message' => 'Server error' ], 500);
        }
        catch (QueryException $e) {
            return response()->json(['message' => 'Query error' ], 500);
        }
        catch (FatalErrorException $e) {
            return response()->json(['message' => 'Server error' ], 500);
        }
    }

    public function destroy(Request $request, $id) 
    {
        try {

            $post = $this->Post->find($id);
            
            if(!$post) {
                return response()->json(['message' => 'Post not found'], 404);  
            }

    
            $post->delete();

        } catch(Throwable $e) {
            return response()->json(['message' => 'Server error' ], 500);
        }
        catch (QueryException $e) {
            return response()->json(['message' => 'Query error' ], 500);
        }
        catch (FatalErrorException $e) {
            return response()->json(['message' => 'Server error' ], 500);
        }
        
    }
}