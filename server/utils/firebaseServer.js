import { initializeApp, cert , getApps } from 'firebase-admin/app'

const configs = {
    "type": "service_account",
    "project_id": "ipets-c854c",
    "private_key_id": "1f4606a7ed659c9f7c73f9406d754953881d91fe",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCXkRjBlrIhXV0Y\nkcnpmuSNQkgP9JtM9vsYqm79BqPoGGi8itc11rY+oKpUSEuSd6fSMNYvlvAnnYBb\n8z4OmIK60DN9Cd8UhSPhUs0K49fg/wjRV07ah6xKsbCnKku7knzowymYj11ZRMp/\n94H7Pl3x/3RgfFsv46o+TH3DdZJKF3BVBVP6nQeGpO3tNH1TNgJu3Jn/gCl/GjXH\nVA24m8kYSFSynIxB0ZKBAoK3CN8PyWY/GqD68lcAgHlA6zFYHH/QGLgCx++/d17x\nscnk5RFS37b7Zxe0QC2JS8YUTkwIDgVjupCUbQsDK/LZaGQuSwaXH0P6xmIWkp8h\nrwY24XlpAgMBAAECggEAJkkSClCRFWl6iyrEaJxmMCJ2hoVAt2vJ2JywpXyIaafE\nyR9/JkvixCYccGbEpC5Sd387k1Dav/8CffePDOvMVfkikGqubYYGHrQmNCKClQSH\nCy41LnFH/aQt3cQK1ko2ACvQNYe9Sj/csP9p13eVDnx7PqYa+JlXFx6GRBnORqWK\neFKxh8N55XKzpzBiuvctAN/+8ZdtgBwKX9oqXg5uRgA29s3PjeogkIc7BdlYC3I/\n94WwJQQFaKhMddjVacX42fj7OUpGYUYAMgStNCgJjigcD3R+E1zbZVp5UfLYo3pi\nQoDQ8CUT2OJVpzC6YCt5jJk4SiywklkTVIkoB5eP8wKBgQDMD6sSZlSSU5rWoetm\nlhRQADZMHflRFsssPLXq4wK3Ezp/NGwaKoo5XVxsVkov5we8bcuGNDS67FrQMbj7\nRpm8Y+h1IEv5UNjsu9UM+DlkJUTcJtP/9X3xt+r49ZZkrFNnr85is7/G064EPPdX\n7LiS4wLmkiTdE5G+lWoQ2FnnzwKBgQC+JPfgQbpdG4ZX362bRqO+G1g8lUKKAwK8\n30xhwRaEgFdvjbAOsS6dHe4kN47wxsl7VgzamuHJ/xrjSX271LskuTHIDKOp/BYL\nttejnsBLZ055ccIiTTb9u+51C6oADKcwgUjHa8idXBRrjX1bM6oZ00JOxgq/sIf/\n3GeHA4ehRwKBgHW+aLByOURBV2uW/FQyLsBGjw32kaA3bb41vaYtnKh0QOGbJvEm\nMKGO/EBKvf3L6cvQ8omaX/6nWHMe7aSXhSeN4liK7SuLec+HRhR4uezOEGCTSuo7\nBZPO0pcaZc/rGykN6SFMpFCeXZ92aiXiolGnCUpvczPZEdSNNClKHP5DAoGBAJoi\nE4EJJs300vkGi480OuWO+v7ZK3/+osiB5kPTprIv6zC1VUMDo7qfGXzoQImzSn4d\nKfxG0sLQdXZLC44oCq/hI5Z7kGvpueEzDShINq6pBnbxnSH7H5mdLtZYZyz1FM3/\n7wQgvhW5H6BzqGs2vSuEEdsTNIFg002314Adf2NfAoGAFj0yfgp5blYJzoTm/aW3\nKitZjxFa7Klose/ThxRqbkl2McRorqC0dcMfHK7NjLOEawrtPNuzjbFWRpwPWJYO\nKSQIgpjj0H1jlR/Jo5B7vJpEhwvXh5zdrIbqratClb6d92RdX5b/v42HJd1QX10Z\nGaM9CYt2SBMtjk6qwYKsZfY=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-keyao@ipets-c854c.iam.gserviceaccount.com",
    "client_id": "100034356798908657919",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-keyao%40ipets-c854c.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}

export default function firebaseServer()
{
    if(getApps().length == 0)
    initializeApp({
        credential: cert(configs)
    })
}