import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcrypt from "bcrypt";
import User from'../models/user.js';


passport.use(new LocalStrategy((username,password,done)=>{//new instance of localstrategy and register it with passport
    username.findOne({username:username},(err,done)=>{//searching a given usernanme from db
        if(err)return done(err);//call done func if err found in querying db
        if(!user)return done(null,false);

        bcrypt.compare(password,user.password,(err,ismatch)=>{//provided pass matches with the given pass in
            if(err) return done(err);
            if(!isMatch) return done(null,false);
            return done(null,user);
        }); 
    });
}));

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
User.findById(id,(err,user)=>{
    done(err,user);
});
});

export default passport;