<?php
namespace App\Http\Controllers\Front\Register;
use Illuminate\Http\Request;
use App\Http\Controllers\FrontController;
use Validator;
use App\User;

class RegisterController extends FrontController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    
    private $user;
    
    public function __construct()
    {
        $this->user = new User();
    }

    public function postCreate(Request $request) {
      
        $data = $request->all();
        
        try {
           $validator = Validator::make($data, $this->rules(), $this->messages());
           
            if ($validator->fails()) {
                $response = response()->json(['message' => 'validationFail', 'data'=> $validator->messages(), 'status' => 400], 400);
            } else {  
                $user =  $this->user->postCreate($data);
                $response = response()->json(['message' => 'sucess', 'data' => $user, 'status' => 200], 200);
            } 
        }
        catch(Exception $e) {
            $response = response()->json(['message' => 'fail', 'status' => $e->getCode()], $e->getCode());
        }
        return $response;
    }
    
    private function rules() {
        return [
            'first_name' => 'required',
            'first_name' => 'required',
            'email'      => 'required|unique:users|email',
            'password'   => 'required|min:8',
            'password2'  => 'required|same:password',
        ];
    }
    
    private function messages() {
        return [
            'first_name.required' => 'unesite ime',
            'last_name.required'  => 'unestite prezime',
            'email.required'      => 'unesite email adresu',
            'email.unique'        => 'email postoji u sistemu',
            'password.required'   => 'unesite šifru',
            'email'               => 'unesite ispravnu email adresu',
            'password.min'        => 'šifra mora biti najmanje 8 karaktera',
            'password2.required'  => 'ponovite šifru',
            'password2.same'      => 'šifre se ne slažu'
        ];
    }
}