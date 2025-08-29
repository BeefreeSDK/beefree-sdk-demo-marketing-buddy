// Email template generators for different campaign types
export const generateEmailTemplate = (campaignType: string, _campaignData: Record<string, unknown>) => {
  const templates = {
    high_value_customers: `
      <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]>
<xml><w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word"><w:DontUseAdvancedTypographyReadingMail/></w:WordDocument>
<o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml>
<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			font-size: 75%;
			line-height: 0;
		}

		.menu_block.desktop_hide .menu-links span {
			mso-hide: all;
		}

		@media (max-width:670px) {
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.image_block div.fullWidth {
				max-width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style><!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]-->
</head>

<body class="body" style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="divider_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;">&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-left:15px;padding-right:15px;width:100%;">
																<div class="alignment" align="left">
																	<div style="max-width: 146.25px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/1a50408b-cf6f-43fb-9493-053a9df68c04.png" style="display: block; height: auto; border: 0; width: 100%;" width="146.25" alt title height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top;">
													<table class="menu_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="color:#000000;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:15px;text-align:center;">
																<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td class="alignment" style="text-align:center;font-size:0px;">
																			<div class="menu-links"><!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:25px;padding-right:15px;padding-bottom:0px;padding-left:15px"><![endif]--><a href="http://example.com" target="_self" style="mso-hide:false;padding-top:25px;padding-bottom:0px;padding-left:15px;padding-right:15px;display:inline-block;color:#3319e2;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:15px;text-decoration:none;letter-spacing:normal;">Offers</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:25px;padding-right:15px;padding-bottom:0px;padding-left:15px"><![endif]--><a href="http://example.com" target="_self" style="mso-hide:false;padding-top:25px;padding-bottom:0px;padding-left:15px;padding-right:15px;display:inline-block;color:#3319e2;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:15px;text-decoration:none;letter-spacing:normal;">Discounts</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:25px;padding-right:15px;padding-bottom:0px;padding-left:15px"><![endif]--><a href="http://example.com" target="_self" style="mso-hide:false;padding-top:25px;padding-bottom:0px;padding-left:15px;padding-right:15px;display:inline-block;color:#3319e2;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:15px;text-decoration:none;letter-spacing:normal;">Support 24/7</a><!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]--></div>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="divider_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;">&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/texture-dot.png'); background-repeat: no-repeat; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:center;width:100%;">
																<h1 style="margin: 0; color: #0c0808; direction: ltr; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 43px; font-weight: normal; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 52px;"><strong>The Device That Takes You Higher</strong></h1>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;">
																<div style="color:#393d47;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5;text-align:left;mso-line-height-alt:24px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum risus.</span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-3" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="left"><a href="http://example.com" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="http://example.com"  style="height:52px;width:148px;v-text-anchor:middle;" arcsize="0%" fillcolor="#151315">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #151315; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 16px; font-weight: undefined; mso-border-alt: none; padding-bottom: 10px; padding-top: 10px; padding-left: 30px; padding-right: 30px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">Visit website</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;">
																<div class="alignment" align="center">
																	<div style="max-width: 325px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/vr-reality2.png" style="display: block; height: auto; border: 0; width: 100%;" width="325" alt="VR Image Placeholder" title="VR Image Placeholder" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="divider_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;">&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
																<div style="color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;line-height:1.2;text-align:center;mso-line-height-alt:22px;">
																	<p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word;">Gaming</span></strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 81.25px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/f97df7bf-bd27-45c1-aba1-cb8865acdf9c.png" style="display: block; height: auto; border: 0; width: 100%;" width="81.25" alt="Gaming Icon Placeholder" title="Gaming Icon Placeholder" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
																<div style="color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;line-height:1.2;text-align:center;mso-line-height-alt:22px;">
																	<p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word;">Drones</span></strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 81.25px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/51bb6574-23bd-47c7-99ed-76d4eb9918df.png" style="display: block; height: auto; border: 0; width: 100%;" width="81.25" alt="Drones Icon Placeholder" title="Drones Icon Placeholder" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
																<div style="color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;line-height:1.2;text-align:center;mso-line-height-alt:22px;">
																	<p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word;">TV</span></strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 81.25px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/b5d9297d-0f7b-4976-b398-62decea3a53b.png" style="display: block; height: auto; border: 0; width: 100%;" width="81.25" alt="TV Icon Placeholder" title="TV Icon Placeholder" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-4" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
																<div style="color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;line-height:1.2;text-align:center;mso-line-height-alt:22px;">
																	<p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word;">Watches</span></strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 81.25px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/c404be7b-a093-4d3a-8426-857b344f31c5.png" style="display: block; height: auto; border: 0; width: 100%;" width="81.25" alt="Smart Watch Icon Placeholder" title="Smart Watch Icon Placeholder" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="divider_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;">&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="divider_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;">&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;">
																<div style="color:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:28px;line-height:1.2;text-align:left;mso-line-height-alt:34px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;"><strong>Most Popular</strong></span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="button_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:left;">
																<div class="alignment" align="left"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"   style="height:32px;width:62px;v-text-anchor:middle;" arcsize="0%" fillcolor="#3319e2">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:12px">
<![endif]--><span class="button" style="background-color: #3319e2; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 12px; font-weight: undefined; mso-border-alt: none; padding-bottom: 0px; padding-top: 0px; padding-left: 15px; padding-right: 15px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="font-size: 16px; word-break: break-word; line-height: 200%; mso-line-height-alt: 32px;"><strong><span style="word-break: break-word; font-size: 12px;" data-mce-style="font-size:12px;">SALE</span></strong></span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
															</td>
														</tr>
													</table>
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 195px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/p3.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="195" alt="Controller Image Placeholder" title="Controller Image Placeholder" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:10px;">
																<div style="color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;line-height:1.2;text-align:left;mso-line-height-alt:22px;">
																	<p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word;">Gaming Controller</span></strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:5px;">
																<div style="color:#696363;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.2;text-align:left;mso-line-height-alt:17px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; text-decoration: line-through;"><strong><span style="word-break: break-word;">$42.00</span></strong></span><span style="word-break: break-word;"><strong><span style="word-break: break-word;"> &nbsp;</span></strong><strong><span style="word-break: break-word;">$38.00</span></strong></span><span style="word-break: break-word; text-decoration: line-through;"><strong><span style="word-break: break-word;"><br></span></strong></span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:left;">
																<div class="alignment" align="left"><a href="http://example.com" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="http://example.com"  style="height:42px;width:127px;v-text-anchor:middle;" arcsize="0%" fillcolor="#151315">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #151315; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 16px; font-weight: undefined; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 25px; padding-right: 25px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">Add to cart</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="button_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:left;">
																<div class="alignment" align="left"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"   style="height:32px;width:62px;v-text-anchor:middle;" arcsize="0%" fillcolor="#3319e2">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:12px">
<![endif]--><span class="button" style="background-color: #3319e2; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 12px; font-weight: undefined; mso-border-alt: none; padding-bottom: 0px; padding-top: 0px; padding-left: 15px; padding-right: 15px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="font-size: 16px; word-break: break-word; line-height: 200%; mso-line-height-alt: 32px;"><strong><span style="word-break: break-word; font-size: 12px;" data-mce-style="font-size:12px;">SALE</span></strong></span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
															</td>
														</tr>
													</table>
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 195px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/p5.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="195" alt="TV screen Image Placeholder" title="TV screen Image Placeholder" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:10px;">
																<div style="color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;line-height:1.2;text-align:left;mso-line-height-alt:22px;">
																	<p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word;">TV Monitor Screen</span></strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:5px;">
																<div style="color:#696363;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.2;text-align:left;mso-line-height-alt:17px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;"><span style="word-break: break-word; text-decoration: line-through;"><strong>$300.00</strong></span><strong>&nbsp; $222</strong><strong>.00</strong></span><span style="word-break: break-word; text-decoration: line-through;"><strong><span style="word-break: break-word;"><br></span></strong></span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:left;">
																<div class="alignment" align="left"><a href="http://example.com" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="http://example.com"  style="height:42px;width:127px;v-text-anchor:middle;" arcsize="0%" fillcolor="#151315">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #151315; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 16px; font-weight: undefined; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 25px; padding-right: 25px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">Add to cart</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="button_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:left;">
																<div class="alignment" align="left"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"   style="height:32px;width:55px;v-text-anchor:middle;" arcsize="0%" fillcolor="#ff441b">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:12px">
<![endif]--><span class="button" style="background-color: #ff441b; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 12px; font-weight: undefined; mso-border-alt: none; padding-bottom: 0px; padding-top: 0px; padding-left: 15px; padding-right: 15px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="font-size: 16px; word-break: break-word; line-height: 200%; mso-line-height-alt: 32px;"><span style="word-break: break-word; font-size: 14px;" data-mce-style="font-size:14px;"><strong><span style="word-break: break-word; font-size: 12px;" data-mce-style="font-size:12px;">HOT</span></strong></span></span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
															</td>
														</tr>
													</table>
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 195px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/p4.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="195" alt="Camera Lens Image Placeholder" title="Camera Lens Image Placeholder" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:10px;">
																<div style="color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;line-height:1.2;text-align:left;mso-line-height-alt:22px;">
																	<p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word;">Full Frame Lens</span></strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:5px;">
																<div style="color:#696363;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.2;text-align:left;mso-line-height-alt:17px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; text-decoration: line-through;"><strong><span style="word-break: break-word;">$41.00</span></strong></span><span style="word-break: break-word;"><strong><span style="word-break: break-word;"> &nbsp;</span></strong><strong><span style="word-break: break-word;">$32.00</span></strong></span><span style="word-break: break-word; text-decoration: line-through;"><strong><span style="word-break: break-word;"><br></span></strong></span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:left;">
																<div class="alignment" align="left"><a href="http://example.com" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="http://example.com"  style="height:42px;width:127px;v-text-anchor:middle;" arcsize="0%" fillcolor="#151315">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #151315; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 16px; font-weight: undefined; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 25px; padding-right: 25px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">Add to cart</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-11" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="divider_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;">&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-12" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="divider_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;">&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-13" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="button_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:left;">
																<div class="alignment" align="left"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"   style="height:32px;width:62px;v-text-anchor:middle;" arcsize="0%" fillcolor="#3319e2">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:12px">
<![endif]--><span class="button" style="background-color: #3319e2; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 12px; font-weight: undefined; mso-border-alt: none; padding-bottom: 0px; padding-top: 0px; padding-left: 15px; padding-right: 15px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="font-size: 16px; word-break: break-word; line-height: 200%; mso-line-height-alt: 32px;"><strong><span style="word-break: break-word; font-size: 12px;" data-mce-style="font-size:12px;">SALE</span></strong></span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
															</td>
														</tr>
													</table>
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 195px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/p6.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="195" alt="Headphones Image Placeholder" title="Headphones Image Placeholder" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:10px;">
																<div style="color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;line-height:1.2;text-align:left;mso-line-height-alt:22px;">
																	<p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word;">Headset</span></strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:5px;">
																<div style="color:#696363;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.2;text-align:left;mso-line-height-alt:17px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; text-decoration: line-through;"><strong><span style="word-break: break-word;">$43.00</span></strong></span><span style="word-break: break-word;"><strong><span style="word-break: break-word;"> &nbsp;</span></strong><strong><span style="word-break: break-word;">$39.00</span></strong></span><span style="word-break: break-word; text-decoration: line-through;"><strong><span style="word-break: break-word;"><br></span></strong></span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:left;">
																<div class="alignment" align="left"><a href="http://example.com" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="http://example.com"  style="height:42px;width:127px;v-text-anchor:middle;" arcsize="0%" fillcolor="#151315">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #151315; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 16px; font-weight: undefined; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 25px; padding-right: 25px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">Add to cart</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="button_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="left"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"   style="height:32px;width:62px;v-text-anchor:middle;" arcsize="0%" fillcolor="#3319e2">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:12px">
<![endif]--><span class="button" style="background-color: #3319e2; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 12px; font-weight: undefined; mso-border-alt: none; padding-bottom: 0px; padding-top: 0px; padding-left: 15px; padding-right: 15px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="font-size: 16px; word-break: break-word; line-height: 200%; mso-line-height-alt: 32px;"><strong><span style="word-break: break-word; font-size: 12px;" data-mce-style="font-size:12px;">SALE</span></strong></span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
															</td>
														</tr>
													</table>
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 195px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/p2.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="195" alt="VR headset Image Placeholder" title="VR headset Image Placeholder" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:10px;">
																<div style="color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;line-height:1.2;text-align:left;mso-line-height-alt:22px;">
																	<p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word;">Narox Headset e50</span></strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:5px;">
																<div style="color:#696363;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.2;text-align:left;mso-line-height-alt:17px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;"><span style="word-break: break-word; text-decoration: line-through;"><strong>$230.00</strong></span><strong>&nbsp; $200</strong><strong>.00</strong></span><span style="word-break: break-word; text-decoration: line-through;"><strong><span style="word-break: break-word;"><br></span></strong></span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:left;">
																<div class="alignment" align="left"><a href="http://example.com" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="http://example.com"  style="height:42px;width:127px;v-text-anchor:middle;" arcsize="0%" fillcolor="#151315">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #151315; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 16px; font-weight: undefined; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 25px; padding-right: 25px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">Add to cart</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="button_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="left"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"   style="height:32px;width:55px;v-text-anchor:middle;" arcsize="0%" fillcolor="#ff441b">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:12px">
<![endif]--><span class="button" style="background-color: #ff441b; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 12px; font-weight: undefined; mso-border-alt: none; padding-bottom: 0px; padding-top: 0px; padding-left: 15px; padding-right: 15px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="font-size: 16px; word-break: break-word; line-height: 200%; mso-line-height-alt: 32px;"><span style="word-break: break-word; font-size: 14px;" data-mce-style="font-size:14px;"><strong><span style="word-break: break-word; font-size: 12px;" data-mce-style="font-size:12px;">HOT</span></strong></span></span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
															</td>
														</tr>
													</table>
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 195px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/p1.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="195" alt="Gaming Headset Placeholder" title="Gaming Headset Placeholder" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:10px;">
																<div style="color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;line-height:1.2;text-align:left;mso-line-height-alt:22px;">
																	<p style="margin: 0; word-break: break-word;"><strong><span style="word-break: break-word;">Gaming Headset<br></span></strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:5px;">
																<div style="color:#696363;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.2;text-align:left;mso-line-height-alt:17px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; text-decoration: line-through;"><strong><span style="word-break: break-word;">$39.00</span></strong></span><span style="word-break: break-word;"><strong><span style="word-break: break-word;"> &nbsp;</span></strong><strong><span style="word-break: break-word;">$32.00</span></strong></span><span style="word-break: break-word; text-decoration: line-through;"><strong><span style="word-break: break-word;"><br></span></strong></span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:left;">
																<div class="alignment" align="left"><a href="http://example.com" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="http://example.com"  style="height:42px;width:127px;v-text-anchor:middle;" arcsize="0%" fillcolor="#151315">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #151315; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 16px; font-weight: undefined; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 25px; padding-right: 25px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">Add to cart</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-14" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="divider_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;">&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-15" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;">
																<div style="color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:28px;line-height:1.2;text-align:left;mso-line-height-alt:34px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;"><strong>Latest News</strong></span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-16" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 195px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/1.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="195" alt="Blog Thumbnail Placeholder" title="Blog Thumbnail Placeholder" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;">
																<div style="color:#393d47;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.5;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0; word-break: break-word;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum risus.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:left;">
																<div class="alignment" align="left"><a href="http://example.com" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="http://example.com"  style="height:42px;width:129px;v-text-anchor:middle;" arcsize="0%" fillcolor="#151315">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #151315; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 16px; font-weight: undefined; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 25px; padding-right: 25px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">Read more</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 195px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/2.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="195" alt="Blog Thumbnail Placeholder" title="Blog Thumbnail Placeholder" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;">
																<div style="color:#393d47;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.5;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0; word-break: break-word;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum risus.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:left;">
																<div class="alignment" align="left"><a href="http://example.com" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="http://example.com"  style="height:42px;width:129px;v-text-anchor:middle;" arcsize="0%" fillcolor="#151315">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #151315; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 16px; font-weight: undefined; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 25px; padding-right: 25px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">Read more</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 195px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/3.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="195" alt="Blog Thumbnail Placeholder" title="Blog Thumbnail Placeholder" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;">
																<div style="color:#393d47;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.5;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0; word-break: break-word;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum risus.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;text-align:left;">
																<div class="alignment" align="left"><a href="http://example.com" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="http://example.com"  style="height:42px;width:129px;v-text-anchor:middle;" arcsize="0%" fillcolor="#151315">
<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #151315; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 16px; font-weight: undefined; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 25px; padding-right: 25px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">Read more</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-17" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="divider_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span style="word-break: break-word;">&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-18" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 162.5px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4281/logo-01_1.png" style="display: block; height: auto; border: 0; width: 100%;" width="162.5" alt title height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="social_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table class="social-table" width="144px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
																		<tr>
																			<td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/facebook@2x.png" width="32" height="auto" alt="Facebook" title="facebook" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 2px 0 2px;"><a href="https://www.twitter.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/twitter@2x.png" width="32" height="auto" alt="Twitter" title="twitter" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 2px 0 2px;"><a href="https://www.linkedin.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/linkedin@2x.png" width="32" height="auto" alt="Linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 2px 0 2px;"><a href="https://www.instagram.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/instagram@2x.png" width="32" height="auto" alt="Instagram" title="instagram" style="display: block; height: auto; border: 0;"></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#ffffff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.2;text-align:center;mso-line-height-alt:17px;">
																	<p style="margin: 0; word-break: break-word;"><a href="http://www.example.com/" target="_blank" rel="noopener" style="color: #ffffff;">Unsubscribe</a></p>
																	<p style="margin: 0; word-break: break-word;">&nbsp;</p>
																	<p style="margin: 0; word-break: break-word;">2021 © All rights reserved</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
    `,
    
    new_subscribers: `
      <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]>
<xml><w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word"><w:DontUseAdvancedTypographyReadingMail/></w:WordDocument>
<o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml>
<![endif]--><!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&amp;display=swap" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,600;0,700;1,700&amp;display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			font-size: 75%;
			line-height: 0;
		}

		.menu_block.desktop_hide .menu-links span {
			mso-hide: all;
		}

		@media (max-width:620px) {

			.row-13 .column-2 .block-4.button_block .alignment .button,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.image_block div.fullWidth {
				max-width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.row-3 .column-1 .block-1.heading_block h1 {
				font-size: 32px !important;
			}

			.row-10 .column-1 .block-1.spacer_block,
			.row-12 .column-1 .block-1.spacer_block,
			.row-14 .column-1 .block-1.spacer_block,
			.row-4 .column-1 .block-1.spacer_block {
				height: 40px !important;
			}

			.row-15 .column-1 .block-2.paragraph_block td.pad>div,
			.row-3 .column-1 .block-2.paragraph_block td.pad>div,
			.row-5 .column-1 .block-2.paragraph_block td.pad>div {
				font-size: 16px !important;
			}

			.row-15 .column-1 .block-1.heading_block h2,
			.row-5 .column-1 .block-1.heading_block h2 {
				font-size: 24px !important;
			}

			.row-13 .column-2 .block-2.heading_block h3,
			.row-13 .column-2 .block-4.button_block .alignment,
			.row-6 .column-2 .block-1.heading_block h3,
			.row-7 .column-2 .block-1.heading_block h3,
			.row-8 .column-2 .block-1.heading_block h3,
			.row-9 .column-2 .block-1.heading_block h3 {
				text-align: center !important;
			}

			.row-13 .column-2 .block-2.heading_block td.pad,
			.row-6 .column-2 .block-1.heading_block td.pad,
			.row-7 .column-2 .block-1.heading_block td.pad,
			.row-8 .column-2 .block-1.heading_block td.pad,
			.row-9 .column-2 .block-1.heading_block td.pad {
				padding: 0 !important;
			}

			.row-11 .column-1 .block-3.paragraph_block td.pad>div,
			.row-11 .column-2 .block-3.paragraph_block td.pad>div,
			.row-13 .column-2 .block-3.paragraph_block td.pad>div,
			.row-6 .column-2 .block-2.paragraph_block td.pad>div,
			.row-7 .column-2 .block-2.paragraph_block td.pad>div,
			.row-8 .column-2 .block-2.paragraph_block td.pad>div,
			.row-9 .column-2 .block-2.paragraph_block td.pad>div {
				text-align: center !important;
				font-size: 14px !important;
			}

			.row-6 .column-2 .block-2.paragraph_block td.pad,
			.row-7 .column-2 .block-2.paragraph_block td.pad,
			.row-8 .column-2 .block-2.paragraph_block td.pad,
			.row-9 .column-2 .block-2.paragraph_block td.pad {
				padding: 20px 0 0 !important;
			}

			.row-11 .column-1 .block-1.image_block .alignment div,
			.row-11 .column-2 .block-1.image_block .alignment div {
				margin: 0 auto !important;
			}

			.row-11 .column-1 .block-2.heading_block h3,
			.row-11 .column-2 .block-2.heading_block h3,
			.row-16 .column-1 .block-3.heading_block h3,
			.row-16 .column-2 .block-3.heading_block h3 {
				text-align: center !important;
				font-size: 20px !important;
			}

			.row-11 .column-1 .block-2.heading_block td.pad,
			.row-11 .column-2 .block-2.heading_block td.pad,
			.row-16 .column-1 .block-3.heading_block td.pad,
			.row-16 .column-2 .block-3.heading_block td.pad {
				padding: 20px !important;
			}

			.row-11 .column-1 .block-3.paragraph_block td.pad,
			.row-11 .column-2 .block-3.paragraph_block td.pad,
			.row-13 .column-2 .block-1.heading_block td.pad,
			.row-16 .column-1 .block-4.paragraph_block td.pad,
			.row-16 .column-2 .block-4.paragraph_block td.pad {
				padding: 0 20px 20px !important;
			}

			.row-11 .column-1 .block-4.paragraph_block td.pad>div,
			.row-11 .column-2 .block-4.paragraph_block td.pad>div,
			.row-16 .column-1 .block-4.paragraph_block td.pad>div,
			.row-16 .column-2 .block-4.paragraph_block td.pad>div {
				text-align: center !important;
				font-size: 16px !important;
			}

			.row-11 .column-1 .block-4.paragraph_block td.pad,
			.row-11 .column-2 .block-4.paragraph_block td.pad,
			.row-16 .column-1 .block-5.paragraph_block td.pad,
			.row-16 .column-2 .block-5.paragraph_block td.pad {
				padding: 0 20px !important;
			}

			.row-13 .column-2 .block-1.heading_block h3,
			.row-16 .column-1 .block-2.heading_block h3,
			.row-16 .column-1 .block-5.paragraph_block td.pad>div,
			.row-16 .column-2 .block-2.heading_block h3,
			.row-16 .column-2 .block-5.paragraph_block td.pad>div {
				text-align: center !important;
				font-size: 18px !important;
			}

			.row-13 .column-2 .block-3.paragraph_block td.pad,
			.row-17 .column-1 .block-2.paragraph_block td.pad {
				padding: 20px 0 !important;
			}

			.row-13 .column-2 .block-4.button_block span {
				font-size: 14px !important;
				line-height: 21px !important;
			}

			.row-16 .column-1 .block-2.heading_block td.pad,
			.row-16 .column-2 .block-2.heading_block td.pad {
				padding: 30px 20px 0 !important;
			}

			.row-17 .column-1 .block-2.paragraph_block td.pad>div {
				font-size: 14px !important;
			}

			.row-17 .column-1 .block-4.menu_block .menu-links a,
			.row-17 .column-1 .block-4.menu_block .menu-links span {
				font-size: 12px !important;
			}

			.row-1 .column-1 {
				padding: 25px 0 !important;
			}

			.row-15 .column-1,
			.row-3 .column-1,
			.row-5 .column-1 {
				padding: 48px 20px !important;
			}

			.row-6 .column-1 {
				padding: 15px 20px 0 !important;
			}

			.row-6 .column-2,
			.row-7 .column-2,
			.row-8 .column-2 {
				padding: 20px 20px 24px !important;
			}

			.row-7 .column-1,
			.row-8 .column-1,
			.row-9 .column-1 {
				padding: 24px 20px 0 !important;
			}

			.row-9 .column-2 {
				padding: 20px 20px 48px !important;
			}

			.row-11 .column-1 {
				padding: 30px 0 40px !important;
			}

			.row-11 .column-2 {
				padding: 0 0 40px !important;
			}

			.row-13 .column-1,
			.row-16 .column-1,
			.row-16 .column-2 {
				padding: 0 0 30px !important;
			}

			.row-13 .column-2 {
				padding: 0 20px 48px !important;
			}

			.row-17 .column-1 {
				padding: 60px 20px !important;
			}
		}
	</style><!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]-->
</head>

<body class="body" style="background-color: #dfdad7; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #dfdad7;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 25px; padding-top: 25px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 120px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/9081/LogoStyle01.png" style="display: block; height: auto; border: 0; width: 100%;" width="120" alt="Logo" title="Logo" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 600px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/9081/woman-img.png" style="display: block; height: auto; border: 0; width: 100%;" width="600" alt="a woman wearing headphones" title="a woman wearing headphones" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 48px; padding-left: 50px; padding-right: 50px; padding-top: 48px; vertical-align: top;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="text-align:center;width:100%;">
																<h1 style="margin: 0; color: #18171c; direction: ltr; font-family: Space Grotesk, Georgia; font-size: 48px; font-weight: 700; letter-spacing: normal; line-height: 1.2; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 58px;">Thank You</h1>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:20px;padding-top:20px;">
																<div style="color:#18171c;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:18px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:center;mso-line-height-alt:27px;">
																	<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
																<div class="alignment" align="center"><a href="https://www.example.com" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="https://www.example.com"  style="height:48px;width:151px;v-text-anchor:middle;" arcsize="21%" fillcolor="#18171c">
<v:stroke dashstyle="Solid" weight="0px" color="#18171c"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #18171c; border-bottom: 0px solid transparent; border-left: 0px solid transparent; border-radius: 10px; border-right: 0px solid transparent; border-top: 0px solid transparent; color: #ffffff; display: inline-block; font-family: 'IBM Plex Mono','Georgia'; font-size: 16px; font-weight: 400; mso-border-alt: none; padding-bottom: 12px; padding-top: 12px; padding-left: 24px; padding-right: 24px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 24px;">Leave a review</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<div class="spacer_block block-1" style="height:24px;line-height:24px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 50px; padding-right: 50px; padding-top: 48px; vertical-align: top;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="text-align:center;width:100%;">
																<h2 style="margin: 0; color: #18171c; direction: ltr; font-family: 'Space Grotesk','Georgia'; font-size: 40px; font-weight: 700; letter-spacing: normal; line-height: 1.2; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 48px;">How to use product</h2>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-top:20px;">
																<div style="color:#191f33;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:18px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:center;mso-line-height-alt:27px;">
																	<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 24px; padding-left: 50px; padding-right: 30px; padding-top: 48px; vertical-align: middle;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 70px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/9081/icon-01.png" style="display: block; height: auto; border: 0; width: 100%;" width="70" alt="icon" title="icon" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="75%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 24px; padding-right: 50px; padding-top: 48px; vertical-align: middle;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:15px;text-align:center;width:100%;">
																<h3 style="margin: 0; color: #18171c; direction: ltr; font-family: 'Space Grotesk','Georgia'; font-size: 18px; font-weight: 600; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 22px;">Metus massa viverra mauris nunc.</h3>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#18171c;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:14px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 24px; padding-left: 50px; padding-right: 30px; padding-top: 24px; vertical-align: middle;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 70px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/9081/icon-02.png" style="display: block; height: auto; border: 0; width: 100%;" width="70" alt="icon" title="icon" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="75%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 24px; padding-right: 50px; padding-top: 24px; vertical-align: middle;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:15px;text-align:center;width:100%;">
																<h3 style="margin: 0; color: #18171c; direction: ltr; font-family: 'Space Grotesk','Georgia'; font-size: 18px; font-weight: 600; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 22px;">Metus massa viverra mauris nunc.</h3>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#18171c;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:14px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 24px; padding-left: 50px; padding-right: 30px; padding-top: 24px; vertical-align: middle;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 70px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/9081/icon-03.png" style="display: block; height: auto; border: 0; width: 100%;" width="70" alt="icon" title="icon" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="75%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 24px; padding-right: 50px; padding-top: 24px; vertical-align: middle;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:15px;text-align:center;width:100%;">
																<h3 style="margin: 0; color: #18171c; direction: ltr; font-family: 'Space Grotesk','Georgia'; font-size: 18px; font-weight: 600; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 22px;">Metus massa viverra mauris nunc.</h3>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#18171c;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:14px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 48px; padding-left: 50px; padding-right: 30px; padding-top: 24px; vertical-align: middle;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 70px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/9081/icon-04.png" style="display: block; height: auto; border: 0; width: 100%;" width="70" alt="icon" title="icon" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="75%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 48px; padding-right: 50px; padding-top: 24px; vertical-align: middle;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:15px;text-align:center;width:100%;">
																<h3 style="margin: 0; color: #18171c; direction: ltr; font-family: 'Space Grotesk','Georgia'; font-size: 18px; font-weight: 600; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 22px;">Metus massa viverra mauris nunc.</h3>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#18171c;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:14px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<div class="spacer_block block-1" style="height:24px;line-height:24px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-11" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 48px; padding-left: 50px; padding-right: 16px; padding-top: 40px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="left">
																	<div style="max-width: 94px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/9081/icon-05.png" style="display: block; height: auto; border: 0; width: 100%;" width="94" alt="Icon help center" title="Icon help center" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:20px;padding-top:20px;text-align:center;width:100%;">
																<h3 style="margin: 0; color: #18171c; direction: ltr; font-family: 'Space Grotesk','Georgia'; font-size: 18px; font-weight: 600; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 22px;">Help here</h3>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:20px;">
																<div style="color:#18171c;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:14px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0;">Got a question or need assistance? Our team is ready to help with any issues or concerns. Just shoot us a message, and we’ll be right there.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#fd5c20;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:16px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:left;mso-line-height-alt:24px;">
																	<p style="margin: 0;"><a href="https://www.example.com" target="_blank" style="text-decoration: underline; color: #fd5c20;" rel="noopener">GET SUPPORT</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 48px; padding-left: 16px; padding-right: 50px; padding-top: 40px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="left">
																	<div style="max-width: 94px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/9081/return-icon.png" style="display: block; height: auto; border: 0; width: 100%;" width="94" alt="Return icon" title="Return icon" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:20px;padding-top:20px;text-align:center;width:100%;">
																<h3 style="margin: 0; color: #18171c; direction: ltr; font-family: 'Space Grotesk','Georgia'; font-size: 18px; font-weight: 600; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 22px;">Need to return?</h3>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:20px;">
																<div style="color:#18171c;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:14px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0;">Not quite what you expected? No problem. Our easy return process ensures you can send it back hassle-free. We're here to make it right.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#fd5c20;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:16px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:left;mso-line-height-alt:24px;">
																	<p style="margin: 0;"><a href="https://www.example.com" target="_blank" style="text-decoration: underline; color: #fd5c20;" rel="noopener">START A RETURN</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-12" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<div class="spacer_block block-1" style="height:24px;line-height:24px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-13" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 48px; padding-left: 50px; padding-top: 48px; vertical-align: middle;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 250px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/9081/product-img-01.png" style="display: block; height: auto; border: 0; width: 100%;" width="250" alt="Product image" title="Product image" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 24px; padding-left: 32px; padding-right: 50px; padding-top: 24px; vertical-align: middle;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:20px;text-align:center;width:100%;">
																<h3 style="margin: 0; color: #5d5d60; direction: ltr; font-family: 'IBM Plex Mono','Georgia'; font-size: 14px; font-weight: 400; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 17px;"><span class="tinyMce-placeholder" style="word-break: break-word;">$5 OFF</span></h3>
															</td>
														</tr>
													</table>
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:20px;text-align:center;width:100%;">
																<h3 style="margin: 0; color: #18171c; direction: ltr; font-family: 'Space Grotesk','Georgia'; font-size: 20px; font-weight: 600; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 24px;">Second Orders get discounts</h3>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:20px;">
																<div style="color:#18171c;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:14px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0;">Use code <strong>SECOND10</strong> at checkout and get $5 off your second order</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="text-align:left;">
																<div class="alignment" align="left"><a href="https://www.example.com" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="https://www.example.com"  style="height:42px;width:143px;v-text-anchor:middle;" arcsize="24%" fillcolor="#18171c">
<v:stroke dashstyle="Solid" weight="0px" color="#18171c"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:12px">
<![endif]--><span class="button" style="background-color: #18171c; border-bottom: 0px solid transparent; border-left: 0px solid transparent; border-radius: 10px; border-right: 0px solid transparent; border-top: 0px solid transparent; color: #ffffff; display: inline-block; font-family: 'IBM Plex Mono','Georgia'; font-size: 12px; font-weight: 400; mso-border-alt: none; padding-bottom: 12px; padding-top: 12px; padding-left: 24px; padding-right: 24px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 18px;">Use your discount</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-14" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<div class="spacer_block block-1" style="height:24px;line-height:24px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-15" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 50px; padding-right: 50px; padding-top: 48px; vertical-align: top;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="text-align:center;width:100%;">
																<h2 style="margin: 0; color: #18171c; direction: ltr; font-family: 'Space Grotesk','Georgia'; font-size: 32px; font-weight: 700; letter-spacing: normal; line-height: 1.2; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 38px;">Designed for You</h2>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-top:20px;">
																<div style="color:#191f33;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:18px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:center;mso-line-height-alt:27px;">
																	<p style="margin: 0;">Every GRAIN product is made with purpose. Now that it’s in your hands, see how it makes everyday moments a little more extraordinary.</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-16" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 0; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 60px; padding-left: 50px; padding-right: 16px; padding-top: 60px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 234px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/9081/product-img-02.png" style="display: block; height: auto; border: 0; width: 100%;" width="234" alt="Mini Disc k81" title="Mini Disc k81" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-top:30px;text-align:center;width:100%;">
																<h3 style="margin: 0; color: #5d5d60; direction: ltr; font-family: 'IBM Plex Mono','Georgia'; font-size: 14px; font-weight: 400; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 17px;">$5.00</h3>
															</td>
														</tr>
													</table>
													<table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:20px;padding-top:20px;text-align:center;width:100%;">
																<h3 style="margin: 0; color: #18171c; direction: ltr; font-family: 'Space Grotesk','Georgia'; font-size: 18px; font-weight: 600; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 22px;">Mini Disc k81</h3>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:20px;">
																<div style="color:#18171c;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:14px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0;">A compact, powerful tool for your creative setup.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#fd5c20;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:16px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:left;mso-line-height-alt:24px;">
																	<p style="margin: 0;"><a href="https://www.example.com" target="_blank" style="text-decoration: underline; color: #fd5c20;" rel="noopener">SHOP NOW</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 60px; padding-left: 16px; padding-right: 50px; padding-top: 60px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div class="fullWidth" style="max-width: 234px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/9081/product-img-03.png" style="display: block; height: auto; border: 0; width: 100%;" width="234" alt="Sewing Machine J64" title="Sewing Machine J64" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-top:30px;text-align:center;width:100%;">
																<h3 style="margin: 0; color: #5d5d60; direction: ltr; font-family: 'IBM Plex Mono','Georgia'; font-size: 14px; font-weight: 400; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 17px;"><span class="tinyMce-placeholder" style="word-break: break-word;">$5.00</span></h3>
															</td>
														</tr>
													</table>
													<table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:20px;padding-top:20px;text-align:center;width:100%;">
																<h3 style="margin: 0; color: #18171c; direction: ltr; font-family: 'Space Grotesk','Georgia'; font-size: 18px; font-weight: 600; letter-spacing: normal; line-height: 1.2; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 22px;">Sewing Machine J64</h3>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:20px;">
																<div style="color:#18171c;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:14px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:left;mso-line-height-alt:21px;">
																	<p style="margin: 0;">Built for precision and designed to last.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#fd5c20;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:16px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:left;mso-line-height-alt:24px;">
																	<p style="margin: 0;"><a href="https://www.example.com" target="_blank" style="text-decoration: underline; color: #fd5c20;" rel="noopener">SHOP NOW</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-17" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; background-color: #e9e7e4; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 60px; padding-top: 60px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 120px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/9081/LogoStyle01.png" style="display: block; height: auto; border: 0; width: 100%;" width="120" alt="Logo" title="Logo" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:15px;padding-top:15px;">
																<div style="color:#191f33;direction:ltr;font-family:'IBM Plex Mono','Georgia';font-size:14px;font-weight:400;letter-spacing:0px;line-height:1.5;text-align:center;mso-line-height-alt:21px;">
																	<p style="margin: 0;">©️2024 Grain<br>1725 Slough Avenue<br>Scranton, PA</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="social_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:25px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
																<div class="alignment" align="center">
																	<table class="social-table" width="208px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
																		<tr>
																			<td style="padding:0 10px 0 10px;"><a href="https://www.facebook.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/facebook@2x.png" width="32" height="auto" alt="Facebook" title="facebook" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 10px 0 10px;"><a href="https://www.twitter.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/twitter@2x.png" width="32" height="auto" alt="Twitter" title="twitter" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 10px 0 10px;"><a href="https://www.instagram.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/instagram@2x.png" width="32" height="auto" alt="Instagram" title="instagram" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 10px 0 10px;"><a href="https://www.linkedin.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/linkedin@2x.png" width="32" height="auto" alt="Linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="menu_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="color:#191f33;font-family:'IBM Plex Mono','Georgia';font-size:12px;font-weight:400;text-align:center;">
																<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td class="alignment" style="text-align:center;font-size:0px;">
																			<div class="menu-links"><!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="https://www.example.com" target="_self" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#191f33;font-family:'IBM Plex Mono','Georgia';font-size:12px;text-decoration:none;letter-spacing:normal;">Unsubscribe</a><!--[if mso]></td><td><![endif]--><span class="sep" style="word-break: break-word; font-size: 12px; font-family: 'IBM Plex Mono','Georgia'; color: #191f33;">|</span><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="https://www.example.com" target="_self" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#191f33;font-family:'IBM Plex Mono','Georgia';font-size:12px;text-decoration:none;letter-spacing:normal;">View in Browser </a><!--[if mso]></td><td><![endif]--><span class="sep" style="word-break: break-word; font-size: 12px; font-family: 'IBM Plex Mono','Georgia'; color: #191f33;">|</span><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="https://www.example.com" target="_self" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#191f33;font-family:'IBM Plex Mono','Georgia';font-size:12px;text-decoration:none;letter-spacing:normal;">Terms of Use</a><!--[if mso]></td><td><![endif]--><span class="sep" style="word-break: break-word; font-size: 12px; font-family: 'IBM Plex Mono','Georgia'; color: #191f33;">|</span><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="https://www.example.com" target="_self" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#191f33;font-family:'IBM Plex Mono','Georgia';font-size:12px;text-decoration:none;letter-spacing:normal;">Privacy Policy</a><!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]--></div>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
    `,
    
    inactive_users: `
      <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]>
<xml><w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word"><w:DontUseAdvancedTypographyReadingMail/></w:WordDocument>
<o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml>
<![endif]--><!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			font-size: 75%;
			line-height: 0;
		}

		@media (max-width:670px) {
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style><!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]-->
</head>

<body class="body" style="background-color: #F6F5FF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F6F5FF;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #333; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 7px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-left:10px;width:100%;padding-right:0px;">
																<div class="alignment" align="left">
																	<div style="max-width: 243.75px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/561/creativepencil.png" style="display: block; height: auto; border: 0; width: 100%;" width="243.75" alt="Image" title="Image" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-right: 15px; padding-top: 5px; vertical-align: top;">
													<table class="social_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="right">
																	<table class="social-table" width="111px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
																		<tr>
																			<td style="padding:0 0 0 5px;"><a href="https://www.facebook.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/facebook@2x.png" width="32" height="auto" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 0 0 5px;"><a href="https://www.twitter.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/twitter@2x.png" width="32" height="auto" alt="Twitter" title="Twitter" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 0 0 5px;"><a href="https://www.instagram.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/instagram@2x.png" width="32" height="auto" alt="Instagram" title="Instagram" style="display: block; height: auto; border: 0;"></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;">
																<div class="alignment" align="center">
																	<div style="max-width: 650px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/561/Top.png" style="display: block; height: auto; border: 0; width: 100%;" width="650" alt="Image" title="Image" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-left: 30px; padding-right: 30px; padding-top: 25px; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
																<div style="color:#B1AED1;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:20px;line-height:1.2;text-align:center;mso-line-height-alt:24px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">WE MISS YOU :(</span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:5px;padding-right:5px;">
																<div style="color:#454562;font-family:'Roboto',Tahoma,Verdana,Segoe,sans-serif;font-size:38px;line-height:1.2;text-align:center;mso-line-height-alt:46px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">Let's stay together.</span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 30px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;">
																<div class="alignment" align="center">
																	<div style="max-width: 650px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/561/Sad_illustration.png" style="display: block; height: auto; border: 0; width: 100%;" width="650" alt="I'm an image" title="I'm an image" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:10px;">
																<div style="color:#555555;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:14px;line-height:1.5;text-align:center;mso-line-height-alt:21px;">
																	<p style="margin: 0; word-break: break-word;">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center"><a href="#" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="#"  style="height:42px;width:277px;v-text-anchor:middle;" arcsize="120%" fillcolor="#C059FF">
<v:stroke dashstyle="Solid" weight="0px" color="#C059FF"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #C059FF; border-bottom: 0px solid transparent; border-left: 0px solid transparent; border-radius: 50px; border-right: 0px solid transparent; border-top: 0px solid transparent; color: #ffffff; display: inline-block; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: undefined; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 50px; padding-right: 50px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;"><strong>REACTIVATE ACCOUNT</strong></span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;">
																<div class="alignment" align="center">
																	<div style="max-width: 650px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/561/Top_blu.png" style="display: block; height: auto; border: 0; width: 100%;" width="650" alt="Image" title="Image" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #6C63FF; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-left: 30px; padding-right: 30px; padding-top: 20px; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
																<div style="color:#A8A3F2;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:20px;line-height:1.2;text-align:center;mso-line-height-alt:24px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">OUR PRICES?</span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:10px;padding-right:10px;">
																<div style="color:#FFFFFF;font-family:'Roboto',Tahoma,Verdana,Segoe,sans-serif;font-size:34px;line-height:1.2;text-align:center;mso-line-height-alt:41px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">For big and small companies</span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:30px;padding-right:30px;padding-top:10px;">
																<div style="color:#FFFFFF;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:14px;line-height:1.5;text-align:center;mso-line-height-alt:21px;">
																	<p style="margin: 0; word-break: break-word;">Far far away, behind the word mountains, far from the countries Vokalia Consonantia, there live the blind texts.</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #6C63FF; color: #000000; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/561/bg_cta.jpg'); background-position: top center; background-repeat: no-repeat; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 15px; padding-right: 10px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 124.8px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/561/starter_pack.png" style="display: block; height: auto; border: 0; width: 100%;" width="124.8" alt="Image" title="Image" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
																<div style="color:#F6F5FF;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;font-size:15px;line-height:1.2;text-align:center;mso-line-height-alt:18px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; background-color: #c059ff;"><strong>&nbsp;STARTER&nbsp;</strong></span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
																<div style="color:#F6F5FF;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:14px;line-height:1.2;text-align:center;mso-line-height-alt:17px;">
																	<p style="margin: 0; word-break: break-word;">Donec tincidunt sollicitudin nisl a volutpat. Nulla non dignissim erat.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#a8a3f2;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:34px;line-height:1.2;text-align:center;mso-line-height-alt:41px;">
																	<p style="margin: 0; word-break: break-word;">$26</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;">
																<div style="color:#F6F5FF;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:10px;line-height:1.2;text-align:center;mso-line-height-alt:12px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">Billed annually</span><br><span style="word-break: break-word;">or $20 month-to-month</span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 10px; padding-right: 10px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 128.05px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/561/team_pack.png" style="display: block; height: auto; border: 0; width: 100%;" width="128.05" alt="Image" title="Image" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
																<div style="color:#F6F5FF;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;font-size:15px;line-height:1.2;text-align:center;mso-line-height-alt:18px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; background-color: #c059ff;"><strong>&nbsp;CREATIVE TEAM&nbsp;</strong></span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
																<div style="color:#F6F5FF;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:14px;line-height:1.2;text-align:center;mso-line-height-alt:17px;">
																	<p style="margin: 0; word-break: break-word;">Donec tincidunt sollicitudin nisl a volutpat. Nulla non dignissim erat.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#a8a3f2;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:34px;line-height:1.2;text-align:center;mso-line-height-alt:41px;">
																	<p style="margin: 0; word-break: break-word;">$39</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;">
																<div style="color:#F6F5FF;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:10px;line-height:1.2;text-align:center;mso-line-height-alt:12px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">Billed annually</span><br><span style="word-break: break-word;">or $32 month-to-month</span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 10px; padding-right: 15px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 124.8px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/561/enterprise_pack.png" style="display: block; height: auto; border: 0; width: 100%;" width="124.8" alt="Image" title="Image" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
																<div style="color:#F6F5FF;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;font-size:15px;line-height:1.2;text-align:center;mso-line-height-alt:18px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word; background-color: #c059ff;"><strong>&nbsp;ENTERPRISE&nbsp;</strong></span></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
																<div style="color:#F6F5FF;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:14px;line-height:1.2;text-align:center;mso-line-height-alt:17px;">
																	<p style="margin: 0; word-break: break-word;">Donec tincidunt sollicitudin nisl a volutpat. Nulla non dignissim erat.</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#a8a3f2;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:34px;line-height:1.2;text-align:center;mso-line-height-alt:41px;">
																	<p style="margin: 0; word-break: break-word;">$59</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;">
																<div style="color:#F6F5FF;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:10px;line-height:1.2;text-align:center;mso-line-height-alt:12px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;">Billed annually</span><br><span style="word-break: break-word;">or $ 50 month-to-month</span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-11" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #6C63FF; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 25px; padding-top: 5px; vertical-align: top;">
													<table class="button_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center"><a href="#" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="#"  style="height:42px;width:204px;v-text-anchor:middle;" arcsize="120%" fillcolor="#C059FF">
<v:stroke dashstyle="Solid" weight="0px" color="#C059FF"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #C059FF; border-bottom: 0px solid transparent; border-left: 0px solid transparent; border-radius: 50px; border-right: 0px solid transparent; border-top: 0px solid transparent; color: #ffffff; display: inline-block; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: undefined; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 50px; padding-right: 50px; text-align: center; width: auto; word-break: keep-all; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;"><strong>LEARN MORE</strong></span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-12" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;">
																<div class="alignment" align="center">
																	<div style="max-width: 650px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/561/Btm_blu.png" style="display: block; height: auto; border: 0; width: 100%;" width="650" alt="Image" title="Image" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-13" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 25px; padding-left: 25px; padding-right: 25px; padding-top: 35px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;">
																<div class="alignment" align="center">
																	<div style="max-width: 99px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/561/Icon_logo_animate.gif" style="display: block; height: auto; border: 0; width: 100%;" width="99" alt="Image" title="Image" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#555555;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;line-height:1.2;text-align:center;mso-line-height-alt:22px;">
																	<p style="margin: 0; word-break: break-word;"><span style="word-break: break-word;"><strong>CreativePencil</strong>, a lorem ipsum creative tool.</span></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-14" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-left: 20px; padding-right: 20px; padding-top: 15px; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#6b6b6b;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:14px;line-height:1.2;text-align:center;mso-line-height-alt:17px;">
																	<p style="margin: 0;">123 Creative street, San Francisco / All rights reserved<br>Made with&nbsp;❤&nbsp;</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
    `
  };

  return templates[campaignType as keyof typeof templates] || templates.high_value_customers;
};
