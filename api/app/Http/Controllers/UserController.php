<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Exceptions\Handler;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Database\QueryException;
use Symfony\Component\Debug\Exception\FatalErrorException;


class UserController extends Controller
{

    private $User;

    public function __construct(User $user)
    {
        $this->User = $user;
    }

    public function index(Request $request) 
    {
        try 
        {
            $token = $request->header('Authorization');
            $user = $this->User->all()->sortByDesc('updated_at');
           
    
            if(!$token) {
                return response()->json(['message' => 'Invalid token' ], 404); 
            }

    
            return response()->json(['user' => $user], 200); 

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

    public function show(Request $request) 
    {
        try 
        {
            $token = $request->header('Authorization');
            $user = $this->User->where('api_token', $token)->first();
           
    
            if(!$user) {
                return response()->json(['message' => 'User not found' ], 404); 
            }
    
            return response()->json(['user' => $user], 200); 

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

    public function update(Request $request)
    {
        try 
        {

            $token = $request->header('Authorization');

            if(!$token) {
                return response()->json(['message' => 'Invalid token' ], 404); 
            }

    
            $this->User->where('api_token', $token)
                        ->update(array(
                            'nome' => $request->name
                        ));
                        
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

    public function destroy(Request $request) 
    {
        try {

            $token = $request->header('Authorization');


            if(!$token) {
                return response()->json(['message' => 'Token not found' ], 404); 
            }

            $user = $this->User->where('api_token', $token);

            if(!$user) {
                return response()->json(['message' => 'Token invalid' ], 404); 
            }

    
            $user->delete();

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