package timeapp.com.timeapp;

/**
 * Created by Manav on 3/1/2017.
 */

import com.parse.Parse;
import com.parse.ParseACL;

import com.parse.ParseUser;

import android.app.Application;

public class ParseApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        // Add your initialization code here
        Parse.initialize(new Parse.Configuration.Builder(this)
                .applicationId("timeApp") // should correspond to APP_ID env variable
                .clientKey("")  // set explicitly blank unless clientKey is configured on Parse server
                                        //.addNetworkInterceptor(new ParseLogInterceptor())
                .server("https://floating-woodland-78413.herokuapp.com/parse/").build());

        ParseUser.enableAutomaticUser();
        ParseACL defaultACL = new ParseACL();

        // If you would like all objects to be private by default, remove this
        // line.
        defaultACL.setPublicReadAccess(true);

        ParseACL.setDefaultACL(defaultACL, true);
    }

}