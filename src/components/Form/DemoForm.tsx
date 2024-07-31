import { Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const DemoForm = () => {
    return (
        <Container fixed className="common-head-bg">
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="h2" gutterBottom className="font-28 fw-600 text-primary mb-5 mt-0">
                            Get a free Demo!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className="floating-label">
                            <input type="text" name="name" className="form-control" />
                            <label>First Name</label>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className="floating-label">
                            <input type="text" name="lname" className="form-control" />
                            <label htmlFor="lname">Last Name</label>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className="floating-label">
                            <input type="text" name="cname" className="form-control" />
                            <label htmlFor="cname">Company Name</label>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className="floating-label">
                            <input type="text" name="industry" className="form-control" />
                            <label htmlFor="industry">Industry Name</label>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className="floating-label">
                            <input type="email" name="email" className="form-control" />
                            <label>Email</label>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className="floating-label">
                            <input type="number" name="mobile" className="form-control" />
                            <label>Mobile</label>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className="floating-label">
                            <select className="form-control" defaultValue="heard">
                                <option value="heard">Where did you heard from?</option>
                                <option value="socialmedia">Social Media</option>
                                <option value="friends">Friends</option>
                                <option value="family">Family</option>
                                <option value="others">Others</option>
                            </select>
                            <label></label>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className="floating-label">
                            <select className="form-control" defaultValue="graphic">
                                <option value="website">Website Development</option>
                                <option value="seo">SEO</option>
                                <option value="graphic">Graphic Designing</option>
                            </select>
                            <label></label>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <div className="floating-label">
                            <textarea className="form-control" rows={6}></textarea>
                            <label>Comment</label>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <div className="flex items-center font-14">
                            <input className="form-control ml-0 mr-2" type="checkbox" />
                            <label>I agree with the terms & conditions</label>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography className="font-14">
                            We're committed to your privacy. RealCube uses the information you provide to us to contact
                            you about relevant content, products and services. You may unsubscribe from these
                            communications at any time. For more information, check our{' '}
                            <Link className="decoration-none text-primary fw-600" href="/about">
                                Privacy Policy
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <button type="submit" className="btn-primary w-100 btnSubmit">
                            Submit
                        </button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default DemoForm;
