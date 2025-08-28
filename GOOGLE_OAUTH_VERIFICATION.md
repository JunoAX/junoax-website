# Google OAuth Verification Requirements Checklist

This document tracks all requirements for Google OAuth verification for HousePoints.

## Current Status
- **App Name:** HousePoints
- **Current Status:** Testing/Unverified
- **Target:** Production/Verified
- **Website:** https://www.junoax.com

## Required Pages/URLs ✅

### 1. Privacy Policy ✅
- **URL:** https://www.junoax.com/privacy/
- **Requirements Met:**
  - ✅ Clearly states what data is collected
  - ✅ Explains how Google user data is used
  - ✅ Includes Limited Use Disclosure
  - ✅ Lists all OAuth scopes requested
  - ✅ Provides data deletion instructions
  - ✅ Contact information included
  - ✅ COPPA compliant for children's data

### 2. Terms of Service ✅
- **URL:** https://www.junoax.com/terms/
- **Requirements Met:**
  - ✅ Clear service description
  - ✅ User obligations
  - ✅ Account termination procedures
  - ✅ Liability limitations
  - ✅ Dispute resolution

### 3. Data Deletion Policy ✅
- **URL:** https://www.junoax.com/data-deletion/
- **Requirements Met:**
  - ✅ Clear deletion instructions
  - ✅ Multiple deletion methods
  - ✅ Timeline for deletion
  - ✅ What data is deleted/retained
  - ✅ Export options before deletion

## OAuth Consent Screen Configuration

### App Information
```
App name: HousePoints
User support email: support@junoax.com
App logo: [Upload HousePoints logo - must be 120x120px]
```

### App Domain
```
Application home page: https://www.junoax.com
Application privacy policy: https://www.junoax.com/privacy/
Application terms of service: https://www.junoax.com/terms/
```

### Authorized Domains
```
junoax.com
housepoints.app (if you have this domain)
```

### Developer Contact Information
```
Email addresses: privacy@junoax.com, info@junoax.com
```

## OAuth Scopes Configuration

### Requested Scopes (Non-sensitive)
```
- email (./auth/userinfo.email)
- profile (./auth/userinfo.profile)  
- openid
```

### Scope Justification
```
We use Google Sign-In to:
1. Authenticate users securely
2. Create user accounts with verified email
3. Personalize the user experience with profile information
4. Provide single sign-on convenience for families
```

## Verification Requirements

### Domain Verification
- [ ] Verify domain ownership in Google Search Console
- [ ] Add DNS TXT record if required

### Security Assessment (May be required)
- [ ] No security vulnerabilities
- [ ] HTTPS enabled on all pages
- [ ] Secure cookie handling
- [ ] CSRF protection implemented

### Video Demonstration (If requested)
Prepare video showing:
1. Login flow with Google OAuth
2. How user data is used
3. Data deletion process
4. Privacy policy accessibility

## Pre-Verification Checklist

### Website Requirements
- [x] Professional website appearance
- [x] Clear company information
- [x] Contact information visible
- [x] Privacy Policy linked in footer
- [x] Terms of Service linked in footer
- [ ] Data Deletion link visible

### Technical Requirements  
- [ ] OAuth implementation follows best practices
- [ ] Proper error handling
- [ ] Secure token storage
- [ ] Refresh token handling (if used)

### Compliance
- [x] GDPR compliant privacy policy
- [x] CCPA compliance mentioned
- [x] COPPA compliance for children
- [x] Limited Use disclosure included

## Submission Process

1. **Complete OAuth Consent Screen**
   - Fill all required fields
   - Upload logo
   - Add all domains

2. **Submit for Verification**
   - Click "Submit for verification"
   - Fill out verification form
   - Provide all URLs

3. **Respond to Google Review**
   - Usually 3-5 business days
   - May request additional information
   - Provide video if requested

4. **Post-Verification**
   - Monitor for compliance emails
   - Keep policies updated
   - Maintain security standards

## Common Rejection Reasons to Avoid

1. **Incomplete Privacy Policy**
   - Solution: Our policy covers all requirements

2. **Missing Data Deletion Process**
   - Solution: Clear deletion page created

3. **Unclear Data Usage**
   - Solution: Explicitly stated in privacy policy

4. **Broken Links**
   - Solution: Test all policy links

5. **Inconsistent Branding**
   - Solution: Use "HousePoints by JunoAI Innovations" consistently

## Important Notes

- **Testing Limits:** Unverified apps can only have 100 users
- **Verification Time:** Usually 3-5 business days, can take longer
- **Annual Review:** Google may review annually
- **Scope Changes:** Adding new scopes requires re-verification

## Support Contacts

- **Google OAuth Support:** https://support.google.com/cloud/answer/10311615
- **Google Cloud Console:** https://console.cloud.google.com
- **OAuth Consent Screen:** https://console.cloud.google.com/apis/credentials/consent

## Action Items for Verification

1. ✅ Create comprehensive privacy policy
2. ✅ Create terms of service
3. ✅ Create data deletion page
4. [ ] Add navigation links to footer for Terms and Data Deletion
5. [ ] Verify domain in Google Search Console
6. [ ] Upload HousePoints logo (120x120px)
7. [ ] Submit for verification

---

*Last updated: August 28, 2025*