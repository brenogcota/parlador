<?php 

namespace App\Mail;

use Illuminate\Support\Facades\Mail;
use Mailgun\Mailgun;

class SendMail 
{

    static function sendEmail($data) {
        Mail::send( $data['view'], $data, function($m) use ($data){
            $m->from('no-reply@gmail.com.br', 'Parlador');
            $m->subject('Parlador');
            $m->to($data['email']);
        });
    }
    
}